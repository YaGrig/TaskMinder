import { t } from "i18next";

export const headers = [
  { id: t("taskList.headers.titleId"), label: t("taskList.headers.title") },
  { id: t("taskList.headers.statusId"), label: t("taskList.headers.status") },
  {
    id: t("taskList.headers.priorityId"),
    label: t("taskList.headers.priority"),
  },
  {
    id: t("taskList.headers.assigneeId"),
    label: t("taskList.headers.assignee"),
  },
  {
    id: t("taskList.headers.dueDateId"),
    label: t("taskList.headers.dueDate"),
  },
];
