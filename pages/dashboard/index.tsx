import React, { useRef } from "react";
import Diagram from "@/components/diagram/diagram";
import styles from "./asd.module.scss";
import MuiTable from "@/components/Table/Table";
import PieDiagram from "@/components/PieDiagram/PieDiagram";
import { useMyClassPageContext } from "@/components/Providers/ProviderTask";
import NoDataWrapper from "@/components/NoDataWrapper/NoDataWrapper";
import { TaskStatisticsDto } from "@/apollo/generated-hooks";

const Dashboard: React.FC = () => {
  const priorityKeys = ["ord", "user", "id", "assignedUserId"];
  const {
    data: tasksData,
    projectTaskStatistics,
    taskStatistic,
  } = useMyClassPageContext();
  const dashboardRef = useRef<HTMLDivElement | null>(null);

  const columns =
    tasksData?.length && tasksData?.length > 0
      ? Object.keys(tasksData[0])
          .filter((key) => !priorityKeys.includes(key))
          .map((key) => ({
            id: key,
            label: key.charAt(0).toUpperCase() + key.slice(1),
          }))
      : [];

  return (
    <div className={styles.dashboard} ref={dashboardRef}>
      <div className={styles.diagramPie}>
        <NoDataWrapper data={!!taskStatistic?.length}>
          <PieDiagram tasks={taskStatistic as TaskStatisticsDto[]} />
        </NoDataWrapper>
      </div>

      <div className={styles.diagram}>
        <NoDataWrapper data={!!tasksData?.length}>
          <Diagram data={projectTaskStatistics} />
        </NoDataWrapper>
      </div>

      <div className={styles.table}>
        <NoDataWrapper data={!!tasksData?.length}>
          <MuiTable columns={columns} />
        </NoDataWrapper>
      </div>
    </div>
  );
};

export default Dashboard;
