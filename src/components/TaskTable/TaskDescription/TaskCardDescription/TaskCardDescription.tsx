import React from 'react';
import { Typography } from '@mui/material';
import styles from '../TaskDescription.module.scss';
interface TaskCardDescriptionProps {
  description: string;
}

const TaskCardDescription: React.FC<TaskCardDescriptionProps> = ({ description }) => {
  return (
    <Typography variant="body1" className={styles.description}>
      {description}
    </Typography>
  );
};

export default TaskCardDescription;
