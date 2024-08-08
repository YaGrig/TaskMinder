import React from "react";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableItem from "../TaskItem/TaskItem";
import styles from "./column.module.scss";
import { Task, User } from "@/apollo/generated-hooks";
interface ContainerProps {
  id: string;
  items: Task[];
}

export default function Container({ id, items = [] }: ContainerProps) {
  const { setNodeRef } = useDroppable({ id });

  return (
    <SortableContext
      id={id}
      items={items}
      strategy={verticalListSortingStrategy}
    >
      <div ref={setNodeRef} className={styles.columnContainer}>
        {items.map((task) => (
          <SortableItem
            key={task.id}
            id={task.id}
            user={task.assignedUserId as User}
          />
        ))}
      </div>
    </SortableContext>
  );
}
