import React, { useState, useEffect } from "react";
import styles from "./TableWrapper.module.scss";
import TaskList from "../TaskList/TaskList";
import TaskCard from "../TaskDescription/TaskDescription";
import { useMyClassPageContext } from "@/components/Providers/ProviderTask";
import NoDataWrapper from "@/components/NoDataWrapper/NoDataWrapper";
import { useRouter } from "next/router";
import { Task } from "@/apollo/generated-hooks";

const TableWrapper = () => {
  const router = useRouter();
  const { taskId } = router.query;
  const [selectedTask, setSelectedTask] = useState<Task>();
  const { data, taskLoading } = useMyClassPageContext();

  useEffect(() => {
    if (taskId && data?.length) {
      const filteredTask = data.filter((task) => task.id === taskId);
      if (filteredTask.length > 0) setSelectedTask(filteredTask[0]);
    } else {
      if (data) {
        setSelectedTask(data[0]);
      }
    }
  }, [taskId, router.query, data]);

  const handleTaskSelect = (task: Task) => {
    setSelectedTask(task);
    router.push(`/tasks/${task.id}`, undefined, { shallow: true });
  };

  return (
    <NoDataWrapper data={!!data?.length} loading={taskLoading}>
      <div className={styles.wrapper}>
        <TaskList
          setSelectedTask={handleTaskSelect}
          selectedTask={selectedTask as Task}
        />
        {selectedTask && <TaskCard task={selectedTask} />}
      </div>
    </NoDataWrapper>
  );
};

export default TableWrapper;
