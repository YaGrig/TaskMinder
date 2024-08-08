import React from "react";
import { Card, CardContent } from "@mui/material";
import { useDrag } from "react-dnd";
interface Task {
  id: string;
  content: string;
}

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    // @ts-ignore
    <Card ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <CardContent>{task.content}</CardContent>
    </Card>
  );
};

export default TaskCard;
