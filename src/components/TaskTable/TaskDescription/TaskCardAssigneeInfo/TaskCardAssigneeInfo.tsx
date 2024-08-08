import React, { useState } from "react";
import { Typography } from "@mui/material";
import styles from "../TaskDescription.module.scss";
import classNames from "classnames";
import InviteField, {
  SelectType,
} from "@/components/TaskModal/InviteField/InviteField";
import { useTranslation } from "react-i18next";

interface TaskCardAssigneeInfoProps {
  author: string;
  assignee: string;
}

const TaskCardAssigneeInfo: React.FC<TaskCardAssigneeInfoProps> = ({
  author,
  assignee,
}) => {
  const { t } = useTranslation();

  const [isFieldVisible, setIsFieldVisible] = useState<boolean>(false);

  const onChange = (): void => {
    setIsFieldVisible(false);
  };

  const renderField = (): JSX.Element => (
    <InviteField
      isShowUserSelect
      type={SelectType.USER}
      setSelectedValue={onChange}
    />
  );

  return (
    <Typography
      variant="body2"
      className={classNames(styles.assigneeInfo, styles.details_card)}
    >
      {t("taskDetailsAuthor.author")}: {author}
      <br />
      {t("taskDetailsAuthor.assignee")}:
      {isFieldVisible ? (
        renderField()
      ) : (
        <p onClick={() => setIsFieldVisible(true)}>{assignee}</p>
      )}
    </Typography>
  );
};

export default TaskCardAssigneeInfo;
