import React, { ComponentType, FC } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import styles from "./MenuItem.module.scss";
import { IconProps } from "@mui/material";

export type MenuItemProps = {
  text: string;
  icon: ComponentType<IconProps>;
  active?: boolean;
  href?: string;
  simplified?: boolean;
  badgeContent?: string | number;
  onClick?: () => void;
  noHover?: boolean;
  className?: string;
};

const MenuItem: FC<MenuItemProps> = ({
  text,
  icon,
  active,
  href,
  simplified,
  badgeContent,
  onClick,
  noHover,
  className,
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      const hrefArray = href.split("/");
      const name = hrefArray[hrefArray.length - 1];
      router.push(href);
    }
  };

  const MenuIcon = icon;
  return (
    <li
      className={classNames(
        className,
        styles.menuItem,
        active && styles.menuItem_active,
        simplified && styles.menuItem_simplified,
        noHover && styles.menuItem_noHover
      )}
      onClick={handleClick}
    >
      <MenuIcon/>
      <span>{!simplified && text}</span>
      {badgeContent !== undefined && (
        <span className={styles.menuItemBadge}>{badgeContent}</span>
      )}
    </li>
  );
};

export default MenuItem;
