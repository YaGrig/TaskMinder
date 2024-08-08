import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { Transform } from "@dnd-kit/utilities";
import {
  CollisionDetection,
  DndContext,
  DragOverlay,
  DragStartEvent,
  DragOverEvent,
  DragEndEvent,
  DragCancelEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  UniqueIdentifier,
  closestCenter,
  getFirstCollision,
  pointerWithin,
  rectIntersection,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import styles from "./boards.module.scss";
import {
  Task,
  TaskStatus,
  TaskTypes,
  useReorderTaskMutation,
} from "@/apollo/generated-hooks";
import Container from "./column/column";
import { Item } from "./TaskItem/TaskItem";
import { useMyClassPageContext } from "@/components/Providers/ProviderTask";
import NoDataWrapper from "@/components/NoDataWrapper/NoDataWrapper";
import { useSnackbar } from "notistack";

export declare type SortingStrategy = (args: {
  activeNodeRect: ClientRect | null;
  activeIndex: number;
  index: number;
  rects: ClientRect[];
  overIndex: number;
}) => Transform | null;

export type DragProps = {
  role: string;
  tabIndex?: number;
  "aria-disabled"?: boolean;
  "aria-pressed"?: boolean;
  "aria-roledescription"?: string;
  "aria-describedby"?: string;
};

export type Items = Record<UniqueIdentifier, Task[]>;

interface DragOverEventWithRect extends DragOverEvent {
  draggingRect?: DOMRect;
}

const TaskBoard: React.FC = () => {
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);

  const [items, setItems] = useState<Items>({
    [TaskStatus.Todo]: [],
    [TaskStatus.InProgress]: [],
    [TaskStatus.Done]: [],
  });
  const recentlyMovedToNewContainer = useRef(false);
  const lastOverId = useRef<UniqueIdentifier | null>(null);
  const [clonedItems, setClonedItems] = useState<Items | null>(null);
  const { data, refetch, taskLoading } = useMyClassPageContext();
  const [reorderTaskMutation] = useReorderTaskMutation();
  const { enqueueSnackbar } = useSnackbar();

  const tasks: Task[] = useMemo(() => {
    return data || [];
  }, [data]);

  useEffect(() => {
    const newItems: Items = {
      [TaskStatus.Todo]: [],
      [TaskStatus.InProgress]: [],
      [TaskStatus.Done]: [],
    };

    tasks.forEach((task) => {
      if (task?.status && task?.status in newItems) {
        newItems[task?.status].push(task);
      }
    });

    for (const status in newItems) {
      newItems[status as TaskStatus].sort((a, b) => {
        if (a.ord === null) return 1;
        if (b.ord === null) return -1;
        const aOrd = parseInt(a.ord as string);
        const bOrd = parseInt(b.ord as string);
        return aOrd - bOrd;
      });
    }

    setItems(newItems);
  }, [tasks]);

  const findContainer = useCallback(
    (id: UniqueIdentifier): TaskStatus => {
      if (id in items) {
        return id as TaskStatus;
      }
      return (Object.keys(items) as TaskStatus[]).find((key) =>
        items[key].some((task) => task.id === id)
      ) as TaskStatus;
    },
    [items]
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    const activeId = active?.id;
    const overId = over?.id;

    const activeContainer = findContainer(activeId);
    const overContainer = findContainer(overId as UniqueIdentifier);

    if (!activeContainer || !overContainer) {
      return;
    }

    setItems((prev) => {
      const activeItems = prev[activeContainer];
      const overItems = prev[overContainer];

      const activeIndex = activeItems.findIndex((item) => item.id === activeId);
      const overIndex = overItems.findIndex((item) => item.id === overId);
      const newOverItems = arrayMove(overItems, activeIndex, overIndex);

      reorderTaskMutation({
        variables: {
          taskId: activeId as string,
          newOrd: overIndex,
          newStatus: overContainer as TaskStatus,
        },
      }).then(() => {
        refetch && refetch();
        enqueueSnackbar("Task reordered successfully", { variant: "success" });
      });

      return {
        ...prev,
        [overContainer]: newOverItems,
      };
    });
    setActiveId(null);
  }

  function handleDragOver(event: DragOverEventWithRect) {
    const { active, over, draggingRect } = event;
    const activeId = active?.id;
    const overId = over?.id;

    const activeContainer = findContainer(activeId);
    const overContainer = findContainer(overId as UniqueIdentifier);

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer === overContainer
    ) {
      return;
    }

    setItems((prev) => {
      const activeItems = prev[activeContainer];
      const overItems = prev[overContainer];

      const activeItem = activeItems.find((item) => item.id === activeId);
      const overItem = overItems.find((item) => item.id === overId);

      const overIndex = overItems.indexOf(overItem as Task);

      let newIndex;
      if (overId && overId in prev) {
        newIndex = overItems.length;
      } else {
        const isBelowLastItem =
          over &&
          overIndex === overItems.length - 1 &&
          draggingRect?.top! > over.rect.top + over.rect.height;

        const modifier = isBelowLastItem ? 1 : 0;
        newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length;
      }

      const newOverItems = [
        ...overItems.slice(0, newIndex),
        activeItem!,
        ...overItems.slice(newIndex),
      ];

      const newActiveItems = activeItems.filter((item) => item.id !== activeId);

      return {
        ...prev,
        [activeContainer]: newActiveItems,
        [overContainer]: newOverItems,
      };
    });
  }

  const collisionDetectionStrategy: CollisionDetection = useCallback(
    (args) => {
      if (activeId && activeId in items) {
        return closestCenter({
          ...args,
          droppableContainers: args.droppableContainers.filter(
            (container) => container.id in items
          ),
        });
      }
      const pointerIntersections = pointerWithin(args);
      const intersections =
        pointerIntersections.length > 0
          ? pointerIntersections
          : rectIntersection(args);
      let overId = getFirstCollision(intersections, "id");

      if (overId != null) {
        if (overId in items) {
          const containerItems = items[overId];

          if (containerItems.length > 0) {
            overId = closestCenter({
              ...args,
              droppableContainers: args.droppableContainers.filter(
                (container) =>
                  container.id !== overId &&
                  containerItems.some((item: Task) => item.id === container.id)
              ),
            })[0]?.id;
          }
        }

        lastOverId.current = overId;

        return [{ id: overId }];
      }

      if (recentlyMovedToNewContainer.current) {
        lastOverId.current = activeId;
      }

      return lastOverId.current ? [{ id: lastOverId.current }] : [];
    },
    [activeId, items]
  );

  const onDragCancel = () => {
    if (clonedItems) {
      setItems(clonedItems);
    }

    setActiveId(null);
    setClonedItems(null);
  };

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;
    const { id } = active;

    setActiveId(id);
  }

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor)
  );

  return (
    <div className={styles.groupsBoards}>
      <DndContext
        sensors={sensors}
        collisionDetection={collisionDetectionStrategy}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragCancel={onDragCancel}
        onDragEnd={handleDragEnd}
      >
        <NoDataWrapper
          data={!!items[TaskStatus.Done].length}
          loading={taskLoading}
        >
          <Container
            id={TaskStatus.Done}
            items={items[TaskStatus.Done] || []}
          />
        </NoDataWrapper>

        <NoDataWrapper
          data={!!items[TaskStatus.InProgress].length}
          loading={taskLoading}
        >
          <Container
            id={TaskStatus.InProgress}
            items={items[TaskStatus.InProgress] || []}
          />
        </NoDataWrapper>
        <NoDataWrapper
          data={!!items[TaskStatus.Todo].length}
          loading={taskLoading}
        >
          <Container
            id={TaskStatus.Todo}
            items={items[TaskStatus.Todo] || []}
          />
        </NoDataWrapper>

        <DragOverlay>
          {activeId ? (
            <Item {...items[findContainer(activeId)]} id={activeId as string} />
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
};

export default TaskBoard;
