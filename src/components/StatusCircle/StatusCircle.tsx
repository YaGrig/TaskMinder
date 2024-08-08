import React from "react";
import styles from "./StatusCircle.module.scss";
type StatusType = "complete" | "in work" | "available";

interface StatusCircleProps {
  type: StatusType;
}

const StatusCircle: React.FC<StatusCircleProps> = ({ type }) => {
  const renderContent = () => {
    switch (type) {
      case "complete":
        return <span className={styles.checkmark}>✓</span>;
      case "in work":
        return <span className={styles.dot}>•</span>;
      case "available":
        return null;
      default:
        return null;
    }
  };

  return (
    <div className={`${styles.circle} ${styles[type]}`}>{renderContent()}</div>
  );
};

export default StatusCircle;
