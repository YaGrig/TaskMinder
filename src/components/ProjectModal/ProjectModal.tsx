import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import {
  ProjectInput,
  useCreateProjectMutation,
} from "@/apollo/generated-hooks";
import ValidatedInput from "../Input/Input";
import { WUIInputVariant } from "../Input/WUIInput";
import { useMyClassPageContext } from "../Providers/ProviderTask";
import { useTranslation } from "react-i18next";
import { Button } from "../dnd";
import styles from "./ProjectModal.module.scss";

interface ProjectFormData extends ProjectInput {}

interface Props {
  onClose: () => void;
}

export const ProjectModal: React.FC<Props> = ({ onClose }) => {
  const { t } = useTranslation();
  const [createProject] = useCreateProjectMutation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectFormData>();

  const { refetchProjectTaskStatistics, refetchProject } =
    useMyClassPageContext();

  const onSubmit = (data: ProjectFormData) => {
    createProject({
      variables: {
        project: {
          title: data.title,
          description: data.description,
        },
      },
    })
      .then(() => {
        refetchProjectTaskStatistics && refetchProjectTaskStatistics();
        refetchProject && refetchProject();
        onClose();
      })
      .catch((error) => {
        console.error("Error creating project:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Controller
        name="title"
        control={control}
        rules={{ required: t("project.requiredName") }}
        render={({ field }) => (
          <ValidatedInput
            {...field}
            variant={WUIInputVariant.filledGray}
            label={t("project.name")}
            className={styles.nameField}
            error={!!errors.title}
            helperText={errors.title ? (errors.title.message as string) : ""}
          />
        )}
      />
      <Controller
        name="description"
        control={control}
        rules={{ required: t("project.requiredDescription") }}
        render={({ field }) => (
          <TextField
            {...field}
            label={t("project.description")}
            error={!!errors.description}
            helperText={
              errors.description ? (errors.description.message as string) : ""
            }
            fullWidth
            margin="normal"
            multiline
            rows={4}
            inputProps={{ style: { fontFamily: "nunito", borderColor: "white" } }}
          />
        )}
      />
      <div className={styles.actions}>
        <Button onClick={onClose} color="secondary">
          {t("project.cancel")}
        </Button>
        <Button type="submit" color="primary">
          {t("project.create")}
        </Button>
      </div>
    </form>
  );
};
