import React from "react";
import Link from "next/link";
import { Button } from "@/components/dnd/Button/Button";
import classNames from "classnames";
import styles from "./WUIMenuItem.module.scss";

interface WUIMenuItemProps {
  href?: string | null;
  onClick?: () => void | null;
  title: string;
  className?: string;
}

const WUIMenuItem: React.FC<WUIMenuItemProps> = ({
  href,
  onClick,
  title,
  className,
}) => {
  console.log(onClick, "herehere");
  return onClick ? (
    <Button
      className={classNames(styles["wuimenu-item"], className)}
      onClick={onClick}
    >
      {title}
    </Button>
  ) : (
    <Link href={href || "#"} className={styles["wuimenu-item"]}>
      {title}
    </Link>
  );
};

export default WUIMenuItem;
