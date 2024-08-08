import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import styles from "./TaskItem.module.scss";
import { taskType } from "./TypeIndicator/TypeIndicator";
import TaskTypeIndicator from "./TypeIndicator/TypeIndicator";
import UserCircle from "@/components/userCircle/userCirlce";
import { User } from "@/apollo/generated-hooks";

// Define the types for the Item component props
interface ItemProps {
  id: string;
  type?: taskType;
  user?: User;
}

export function Item({ id, type, user }: ItemProps) {
  return (
    <div className={styles.item}>
      <div className={styles.itemContent}>
        <TaskTypeIndicator type={type as taskType} />
        <span>{id}</span>
      </div>
      <UserCircle user={user as User} />
    </div>
  );
}

interface SortableItemProps {
  id: string;
  user: User;
  type?: taskType;
}

export default function SortableItem({
  id,
  user,
  type = taskType.ANALITIC,
}: SortableItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={styles.taskItem}
      {...attributes}
      {...listeners}
    >
      <Item id={id} type={type} user={user} />
    </div>
  );
}
