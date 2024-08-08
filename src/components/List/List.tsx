import React, { ComponentType } from "react";
import { IconProps, List } from "@mui/material";
import styles from "./List.module.scss";
import {
  Assignment as AssignmentIcon,
  Dashboard as DashboardIcon,
  ViewKanban as ViewKanbanIcon,
  CalendarToday as CalendarTodayIcon,
} from "@mui/icons-material";
import { useRouter } from "next/router";
import MenuItem from "./MenuItem/MenuItem";
import { Routes } from "@/Routes";
import { useTranslation } from "react-i18next";

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

const ListMenu = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const messenger: MenuItemProps = {
    icon: AssignmentIcon as React.ComponentType<IconProps>,
    text: t("MainMenu.tasks"),
    href: Routes.tasks(),
  };

  const teacherBills: MenuItemProps = {
    icon: DashboardIcon as React.ComponentType<IconProps>,
    text: t("MainMenu.dashboard"),
    href: Routes.dashboard(),
  };

  const teacherTasks: MenuItemProps = {
    icon: ViewKanbanIcon as React.ComponentType<IconProps>,
    text: t("MainMenu.boards"),
    href: Routes.boards(),
  };

  const calendar = {
    icon: CalendarTodayIcon as React.ComponentType<IconProps>,
    text: t("MainMenu.landing"),
    href: Routes.landing(),
  };

  const teacherMenuItems: MenuItemProps[] = [
    calendar,
    messenger,
    teacherTasks,
    teacherBills,
  ];

  const isActive = (pathname: string, href: string): boolean => {
    return pathname.startsWith(href);
  };
  return (
    <List className={styles.listMenu}>
      {teacherMenuItems.map(({ icon, text, href, badgeContent }) => {
        const active = isActive(router.pathname, href as string);
        return (
          <MenuItem
            key={text}
            icon={icon}
            text={text}
            active={active}
            href={href}
            badgeContent={badgeContent}
          />
        );
      })}
    </List>
  );
};

export default ListMenu;
