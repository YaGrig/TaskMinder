import { ProjectTaskStatisticsDto } from "@/apollo/generated-hooks";
import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Bar,
  BarChart,
} from "recharts";
import styles from "./diagram.module.scss"; 
import { useTranslation } from "react-i18next";

interface DataItem {
  name: string;
  uv?: number;
  taskCount: number;
  amt?: number;
}

interface DiagramComponentProps {
  data?: ProjectTaskStatisticsDto[];
}

const DiagramComponent: React.FC<DiagramComponentProps> = ({ data }) => {
  const { t } = useTranslation();

  const maxCount = data
    ? Math.max(...data.map((item) => item.taskCount ?? 0))
    : 0;

  const transformedData: DataItem[] = data
    ? data.map((item) => ({
        name: item.projectName || "Unnamed Project",
        taskCount: item.taskCount ?? 0,
        amt: maxCount,
      }))
    : [];

  const padding = data?.length === 2 ? 100 : 10;

  return (
    <div className={styles.diagramContainer}>
      <div className={styles.header}>{t("chart.projects")}</div>
      <ResponsiveContainer width="100%" height="100%" minWidth={"300px"}>
        <BarChart
          width={500}
          height={300}
          data={transformedData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: padding, right: padding }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar
            dataKey="taskCount"
            fill="#FADADD"
            background={{ fill: "#eee" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DiagramComponent;
