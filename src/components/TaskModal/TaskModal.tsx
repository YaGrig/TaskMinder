import React, { useState, useEffect } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../dnd";
import {
  TaskInput,
  TaskPriority,
  TaskStatus,
  useAllProjectsQuery,
  useCreateTaskMutation,
  useGetUserByEmailQuery,
  User,
  useUpdateProjectMutation,
} from "@/apollo/generated-hooks";
import styles from "./TaskModal.module.scss";
import { WUIInput, WUIInputVariant } from "../Input/WUIInput";
import { useWatch } from "react-hook-form";

import InviteField, { SelectType } from "./InviteField/InviteField";
import { useMyClassPageContext } from "../Providers/ProviderTask";
import DateInput from "../DatePicker/DatePicker";
import { useSnackbar } from "notistack";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";

export const emailValidationRegexp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

enum FieldType {
  USER = "USER",
  PROJECT = "PROJECT",
}

interface props {
  onclose: () => void;
}

export const validateEmail = (email: string) =>
  String(email).toLowerCase().match(emailValidationRegexp);

export const TaskModal: React.FC<props> = ({ onclose }) => {
  const [createTask] = useCreateTaskMutation();
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<boolean>();
  const [user, setUser] = useState(null);
  const [project, setProject] = useState<string>("");
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const { refetch, usersData } = useMyClassPageContext();
  const {
    data: dataUser,
    loading: loadingUser,
    refetch: refetchUser,
  } = useGetUserByEmailQuery({
    variables: {
      email,
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    setError: setFormError,
  } = useForm();

  useEffect(() => {
    refetchUser();
  }, [user]);

  const handleChange = (email: string) => {
    setEmail(email);
    if (!validateEmail(email)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const getClearFieldFunction = (fieldType: FieldType) => {
    switch (fieldType) {
      case FieldType.USER:
        return () => setEmail("");
      case FieldType.PROJECT:
        return () => setProject("");
      default:
        return () => {};
    }
  };

  const clearUser = getClearFieldFunction(FieldType.USER);
  const clearProject = getClearFieldFunction(FieldType.PROJECT);

  const handleClickAdd = () => {
    if (!email || email.length <= 0) {
      return;
    }
  };

  const validateForm = (data: TaskInput) => {
    if (!validateEmail(data.assignedUserEmail as string)) {
      setFormError("user", {
        type: "manual",
        message: t("validation.priorityRequired"),
      });
      return false;
    }

    if (!data.project) {
      setFormError("project", {
        type: "manual",
        message: t("validation.priorityRequired"),
      });
      return false;
    }

    return true;
  };

  const onSubmit = (data: TaskInput) => {
    const formattedDate = format(data.dueDate as string, "yyyy-MM-dd");
    if (validateForm(data)) {
      const taskInput: TaskInput = {
        title: data.title,
        description: data.description,
        status: data.status,
        priority: data.priority,
        dueDate: formattedDate,
        assignedUserEmail: data.assignedUserEmail,
      };

      createTask({
        variables: {
          task: taskInput,
          projectId: data.project as string,
        },
      })
        .then((response) => {
          onclose();
          refetch && refetch();
          enqueueSnackbar("Task created", { variant: "success" });
        })
        .catch((error) => {
          console.error("Ошибка создания задачи:", error);
        });
    }
  };

  return (
    <LocalizationProvider adapterLocale="ru">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
        noValidate
      >
        <div className={styles.basicInfo}>
          <div className={styles.fieldWithLabel}>
            <FormControl fullWidth margin="normal">
              <Controller
                name="assignedUserEmail"
                control={control}
                rules={{
                  required: t("validation.userRequired"),
                  validate: (value) =>
                    validateEmail(value) || "Invalid email address",
                }}
                render={({ field }) => (
                  <InviteField
                    {...field}
                    user={dataUser?.getUserByEmail as User}
                    isShowUserSelect
                    placeholder={t("taskModal.assigned user")}
                    type={SelectType.USER}
                    setSelectedValue={(value) => {
                      field.onChange(value);
                      setEmail(value);
                    }}
                    errorMessage={errors.assignedUserEmail?.message as string}
                    handleChange={handleChange}
                    handleClickAdd={handleClickAdd}
                    clearCallback={clearUser}
                    excludeIds={[]}
                  />
                )}
              />
            </FormControl>
          </div>
          <div className={styles.fieldWithLabel}>
            <FormControl fullWidth margin="normal">
              <Controller
                name="project"
                control={control}
                rules={{ required: t("validation.projectRequired") }}
                render={({ field }) => (
                  <InviteField
                    {...field}
                    user={project}
                    placeholder={t("taskModal.project name")}
                    type={SelectType.PROJECT}
                    setSelectedValue={(value) => {
                      field.onChange(value);
                      setProject(value);
                    }}
                    errorMessage={errors.project?.message as string}
                    handleChange={handleChange}
                    clearCallback={clearProject}
                    excludeIds={[]}
                  />
                )}
              />
            </FormControl>
          </div>
          <div className={styles.fieldWithLabel}>
            <FormControl fullWidth margin="normal">
              <Controller
                name="dueDate"
                control={control}
                rules={{ required: t("validation.dueDateRequired") }}
                render={({ field }) => (
                  <DateInput className={styles.dueDate} field={field} />
                )}
              />
              {errors.dueDate && (
                <p className={styles.errorText}>
                  {errors.dueDate.message as string}
                </p>
              )}
            </FormControl>
          </div>
        </div>
        <Divider />
        <div className={styles.content}>
          <Controller
            name="title"
            control={control}
            rules={{ required: t("validation.titleRequired") }}
            render={({ field }) => (
              <WUIInput
                {...field}
                className={styles.input}
                variant={WUIInputVariant.filledGray}
                label={t("taskModal.title")}
                error={!!errors.title}
                helperText={
                  errors.title ? (errors.title.message as string) : ""
                }
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            rules={{ required: t("validation.descriptionRequired") }}
            render={({ field }) => (
              <WUIInput
                {...field}
                className={styles.input}
                variant={WUIInputVariant.filledGray}
                label={t("taskModal.description")}
                error={!!errors.description}
                helperText={
                  errors.description
                    ? (errors.description.message as string)
                    : ""
                }
              />
            )}
          />
          <Controller
            name="status"
            control={control}
            rules={{ required: t("validation.statusRequired") }}
            render={({ field }) => (
              <div className={styles.fieldContainer}>
                <select {...field} className={styles.select}>
                  {Object.values(TaskStatus).map((status) => (
                    <option key={status} value={status}>
                      {t(`taskStatus.${status}`)}
                    </option>
                  ))}
                </select>
                {errors.status && (
                  <p className={styles.errorText}>
                    {errors.status.message as string}
                  </p>
                )}
              </div>
            )}
          />

          <Controller
            name="priority"
            control={control}
            rules={{ required: t("validation.priorityRequired") }}
            render={({ field }) => (
              <div className={styles.fieldContainer}>
                <select {...field} className={styles.select}>
                  {Object.values(TaskPriority).map((priority) => (
                    <option key={priority} value={priority}>
                      {t(`taskPriority.${priority}`)}
                    </option>
                  ))}
                </select>
                {errors.priority && (
                  <p className={styles.errorText}>
                    {errors.priority.message as string}
                  </p>
                )}
              </div>
            )}
          />
        </div>
        <Button className={styles.button} type="submit">
          {t("button.submit")}
        </Button>
      </form>
    </LocalizationProvider>
  );
};
