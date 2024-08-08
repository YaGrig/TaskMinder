import React, { useState } from "react";
import { Pie, Cell, PieChart, PieProps, SectorProps } from "recharts";
import { renderActiveShape } from "./utils";
import { useTranslation } from "react-i18next";
import styles from "./PieDiagram.module.scss";
import { TaskStatisticsDto } from "@/apollo/generated-hooks";

const COLORS = ["#C7C8CA", "#FADADD", "#f4adb4"];

interface Task {
  name: string;
  value: number;
}

interface PieDiagramProps {
  tasks: TaskStatisticsDto[];
}

const PieDiagram: React.FC<PieDiagramProps> = ({ tasks }) => {
  const [index, setIndex] = useState<number | undefined>(undefined);
  const { t } = useTranslation();

  const onPieEnter: PieProps["onMouseEnter"] = (_, index) => {
    setIndex(index);
  };

  return (
    <>
      <span className={styles.header}>{t("chart.priority")}</span>
      <PieChart width={600} height={300}>
        <Pie
          activeIndex={index}
          activeShape={renderActiveShape as any}
          data={tasks as TaskStatisticsDto[]}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#FADADD"
          dataKey="value"
          onMouseEnter={onPieEnter}
        >
          {tasks.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </>
  );
};

export default PieDiagram;
