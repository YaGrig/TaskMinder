import React from "react";
import Tooltip from "@mui/material/Tooltip";
import styles from "./TypeIndicator.module.scss";

export enum taskType {
  ANALITIC = "ANALITIC",
  IMPROVEMENT = "IMPROVEMENT",
  TASK = "TASK",
  BUG = "BUG",
}

export const taskTypeToColor: Record<taskType, string> = {
  [taskType.ANALITIC]: "yellow",
  [taskType.IMPROVEMENT]: "blue",
  [taskType.TASK]: "green",
  [taskType.BUG]: "red",
};

export const taskTypeToName: Record<taskType, string> = {
  [taskType.ANALITIC]: "Аналитика",
  [taskType.IMPROVEMENT]: "Улучшение",
  [taskType.TASK]: "Задача",
  [taskType.BUG]: "Ошибка",
};

interface TaskTypeIndicatorProps {
  type: taskType;
}

const TaskTypeIndicator: React.FC<TaskTypeIndicatorProps> = ({ type }) => {
  const color = taskTypeToColor[type] || "grey";
  const name = taskTypeToName[type] || "Неизвестный тип";

  return (
    <Tooltip title={name}>
      <div
        className={styles.taskTypeIndicator}
        style={{ backgroundColor: color }}
      />
    </Tooltip>
  );
};

export default TaskTypeIndicator;
