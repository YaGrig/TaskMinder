import React, { useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import styles from "./TaskList.module.scss";
import { useMyClassPageContext } from "@/components/Providers/ProviderTask";
import SortableHeaderCell from "./TaskListCell/TaskListCell";
import { TaskSort, Task } from "@/apollo/generated-hooks"; 
import classNames from "classnames";

interface TaskListProps {
  setSelectedTask: (task: Task) => void;
  selectedTask: Task;
}

const TaskList: React.FC<TaskListProps> = ({
  setSelectedTask,
  selectedTask,
}) => {
  const { setSort, data: dataTasks } = useMyClassPageContext();

  const sortOptions: TaskSort[] = [
    TaskSort.Name,
    TaskSort.Date,
    TaskSort.Status,
  ];

  const tasks = useMemo(() => dataTasks || [], [dataTasks]);

  return (
    <TableContainer component={Paper} className={styles.list}>
      <Table>
        <TableHead>
          <TableRow>
            <SortableHeaderCell sortOptions={sortOptions} sortField={setSort} />
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task: Task) => (
            <TableRow key={task.id} onClick={() => setSelectedTask(task)}>
              <TableCell
                className={classNames(
                  styles.cell,
                  selectedTask?.id === task.id && styles.activeCell
                )}
              >
                {task.title}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TaskList;
