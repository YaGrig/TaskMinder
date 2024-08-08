import React, { ReactNode } from "react";
import styles from "./Wrapper.module.scss";

interface CenteredCardWrapperProps {
  children: ReactNode;
}

const CenteredCardWrapper: React.FC<CenteredCardWrapperProps> = ({
  children,
}) => {
  return (
    <div className={styles.background}>
      <div className={styles.card}>{children}</div>
    </div>
  );
};

export default CenteredCardWrapper;
