import React from "react";
import { Card } from "@mui/material";
import styles from "./TaskDescription.module.scss";
import TaskCardAssigneeInfo from "./TaskCardAssigneeInfo/TaskCardAssigneeInfo";
import TaskCardComments from "./TaskCardComments/TaskCardComments";
import TaskCardDescription from "./TaskCardDescription/TaskCardDescription";
import TaskCardDetails from "./TaskCardDetails/TaskCardDetails";
import TaskCardHeader from "./TaskCardHeader/TaskCardHeader";
import {
  Comment,
  Task,
  TaskPriority,
  TaskStatus,
  useCommentsByTaskQuery,
} from "@/apollo/generated-hooks";

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const { data, refetch } = useCommentsByTaskQuery({
    variables: {
      id: task.id,
    },
  });
  const comments = data?.commentsByTask as Comment[];
  return (
    <Card className={styles.details}>
      <TaskCardHeader title={task.title as string} />
      <div className={styles.sub_details}>
        <TaskCardDetails
          status={task.status as TaskStatus}
          id={task.id}
          priority={task.priority as TaskPriority}
          dueDate={task.dueDate as string}
        />
        <TaskCardAssigneeInfo
          author={task.user?.firstname as string}
          assignee={task.assignedUserId?.firstname as string}
        />
      </div>
      <TaskCardDescription description={task.description as string} />
      <TaskCardComments
        //@ts-ignore
        comments={comments}
        taskId={task?.id}
        refetch={refetch}
      />
    </Card>
  );
};

export default TaskCard;
