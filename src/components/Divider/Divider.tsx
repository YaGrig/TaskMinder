import React from "react";
import styles from "./Divider.module.scss";

interface DividerProps {
  style?: React.CSSProperties;
}

const Divider: React.FC<DividerProps> = ({ style }) => {
  return <hr className={styles.divider} style={style} />;
};

export default Divider;
