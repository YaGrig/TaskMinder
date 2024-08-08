import React, { useState, MouseEvent } from "react";
import {
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import styles from "../TaskDescription.module.scss";
import {
  useUpdateTaskMutation,
  TaskPriority,
  TaskStatus,
  TaskTypes,
} from "@/apollo/generated-hooks";
import WUIMenuItem from "@/components/header/actions/WUIMenuItem/WUIMenuItem";
import WUIMenu from "@/components/header/actions/WUIMenu";
import { useMyClassPageContext } from "@/components/Providers/ProviderTask";
import { useTranslation } from "react-i18next";
import DateInput from "@/components/DatePicker/DatePicker";

interface TaskCardDetailsProps {
  status: TaskStatus;
  id: string;
  priority: TaskPriority;
  dueDate: string | null;
}

interface EditModeState {
  status: boolean;
  priority: boolean;
  dueDate: boolean;
}

const TaskCardDetails: React.FC<TaskCardDetailsProps> = ({
  status,
  id,
  priority,
  dueDate,
}) => {
  const { t } = useTranslation();
  const [editMode, setEditMode] = useState<EditModeState>({
    status: false,
    priority: false,
    dueDate: false,
  });
  const [updateTask] = useUpdateTaskMutation();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [value, setValue] = useState<Date | null>(
    dueDate ? new Date(dueDate) : new Date()
  );
  const { refetch } = useMyClassPageContext();

  const taskPriorities = Object.values(TaskPriority);
  const taskStatuses = Object.values(TaskStatus);
  const taskTypes = Object.values(TaskTypes);

  const createItems = (type: "Priority" | "Status" | "Type") => {
    let newMenuItems: { label: string; onClick: () => void }[];
    switch (type) {
      case "Priority":
        newMenuItems = taskPriorities.map((priority) => ({
          label: t(`taskOptions.priority.${priority}`),
          onClick: () => {
            updateTask({
              variables: {
                id: id,
                input: { priority: priority },
              },
            }).then(() => refetch && refetch());
          },
        }));
        break;
      case "Status":
        newMenuItems = taskStatuses.map((status) => ({
          label: t(`taskOptions.status.${status}`),
          onClick: () => {
            updateTask({
              variables: {
                id: id,
                input: { status: status },
              },
            }).then(() => refetch && refetch());
          },
        }));
        break;
      case "Type":
        newMenuItems = taskTypes.map((type) => ({
          label: type,
          onClick: () => console.log(`Selected type: ${type}`),
        }));
        break;
      default:
        newMenuItems = [];
    }
    return newMenuItems;
  };

  const toggleEditMode = (field: keyof EditModeState) => {
    setEditMode({ ...editMode, [field]: !editMode[field] });
  };

  const openMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    toggleEditMode(
      event.currentTarget.getAttribute("data-editmode") as keyof EditModeState
    );
  };

  const handleDateChange = (newValue: Date | null) => {
    setValue(newValue);
    if (newValue) {
      updateTask({
        variables: {
          id: id,
          input: { dueDate: newValue.toISOString().split("T")[0] },
        },
      }).then(() => refetch && refetch());
    }
  };

  return (
    <CardContent className={styles.details_card}>
      <div data-editmode="status" className={styles.item} onClick={openMenu}>
        {t("taskDetails.status")}:
        {editMode.status ? (
          <WUIMenu
            className={styles.menu}
            anchorEl={anchorEl}
            onClose={() => {
              toggleEditMode("status");
              setAnchorEl(null);
            }}
          >
            {createItems("Status").map((item) => (
              <WUIMenuItem
                title={item.label}
                key={item.label}
                onClick={item.onClick}
              />
            ))}
          </WUIMenu>
        ) : (
          <Typography variant="body1"> {status}</Typography>
        )}
      </div>
      <div data-editmode="priority" className={styles.item} onClick={openMenu}>
        {t("taskDetails.priority")}:
        {editMode.priority ? (
          <WUIMenu
            className={styles.menu}
            anchorEl={anchorEl}
            onClose={() => {
              toggleEditMode("priority");
              setAnchorEl(null);
            }}
          >
            {createItems("Priority").map((item) => (
              <WUIMenuItem
                title={item.label}
                key={item.label}
                onClick={item.onClick}
              />
            ))}
          </WUIMenu>
        ) : (
          <Typography variant="body1"> {priority}</Typography>
        )}
      </div>
      <div data-editmode="dueDate" className={styles.item}>
        {t("taskDetails.dueDate")}:
        {editMode.dueDate ? (
          <DateInput
            onChange={handleDateChange}
            setIsOpen={() =>
              setEditMode({
                ...editMode,
                dueDate: false,
              })
            }
          />
        ) : (
          <Typography
            onClick={(e) => {
              e.stopPropagation();
              toggleEditMode("dueDate");
            }}
            variant="body1"
          >
            {dueDate}
          </Typography>
        )}
      </div>
    </CardContent>
  );
};

export default TaskCardDetails;
