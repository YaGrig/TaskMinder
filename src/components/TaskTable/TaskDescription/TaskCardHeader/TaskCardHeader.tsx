import React from "react";
import { CardHeader } from "@mui/material";
import styles from "../TaskDescription.module.scss";

interface TaskCardHeaderProps {
  title: string;
}
const TaskCardHeader: React.FC<TaskCardHeaderProps> = ({ title }) => {
  return <CardHeader title={title} className={styles.header} />;
};

export default TaskCardHeader;
