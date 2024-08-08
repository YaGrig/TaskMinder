import React, { useState, MouseEvent } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Paper } from "@mui/material";
import styles from "./Form.module.scss";
import classNames from "classnames";
import { useSnackbar } from "notistack";
import axios from "axios";
import { useRouter } from "next/router";
import { Routes } from "@/Routes";
import { Button } from "../dnd";
import { Puff } from "react-loader-spinner";
import { CloseIcon } from "../WUIIcon";
import ValidatedInput from "../Input/Input";
import { WUIInputVariant } from "../Input/WUIInput";
import ImageUploader from "../ImageUploader/ImageUploader";
import { uploadFile } from "../../../pages/api/files";
import { formFields } from "./utils";

export enum FormType {
  login = "login",
  registration = "registration",
}

interface FormProps {
  formType: FormType;
  onClose?: () => void;
}

interface FormData {
  firstname?: string;
  lastname?: string;
  email: string;
  password: string;
  login?: string;
}

const setCookie = (name: string, value: string, maxAge: number) => {
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; path=/; max-age=${maxAge}`;
};

const Form: React.FC<FormProps> = ({ formType, onClose }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const [showValidation, setShowValidation] = useState(false);
  const [profileImage, setProfileImage] = useState<File | null>(null);

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    setShowValidation(true);
    event.preventDefault();
    handleSubmit(onSubmit)();
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      let apiUrl = "http://localhost:8080/api/v1";
      const requestBody = {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: data.password,
        login: data.login,
      };

      const endpoint =
        formType === FormType.registration
          ? "auth/register"
          : "auth/authenticate";
      const response = await axios.post(`${apiUrl}/${endpoint}`, requestBody);

      enqueueSnackbar(
        formType === FormType.registration
          ? "Registration successful"
          : "Login successful",
        { variant: "success" }
      );

      setCookie(
        "currentUser",
        JSON.stringify({
          token: response.data.accessToken,
          expiredAt: Date.now() + 3600000 * 10,
        }),
        86400
      );

      setCookie(
        "refreshToken",
        JSON.stringify({
          token: response.data.refreshToken,
          expiredAt: Date.now() + 30 * 24 * 60 * 60 * 1000,
        }),
        86400
      );

      if (formType === FormType.registration && profileImage) {
        const uploadResponse = await uploadFile("avatar", profileImage);
        console.log("Avatar uploaded successfully:", uploadResponse);
      }

      await router.push(Routes.dashboard());
      window.location.reload();
    } catch (error) {
      enqueueSnackbar("An error occurred. Please try again.", {
        variant: "error",
      });
      console.error("Operation failed:", error);
    }
  };

  const handleImageChange = (file: File) => {
    setProfileImage(file);
  };

  return (
    <div className={classNames(styles.modalWrapper)}>
      <Paper
        className={classNames(
          styles.modalWrapper,
          formType === FormType.login
            ? styles.modalWrapper_login
            : styles.modalWrapper_registration
        )}
        elevation={3}
      >
        <CloseIcon className={styles.closeIcon} onClick={onClose} />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.form}
          noValidate
        >
          <div className={styles.containerFields}>
            {formFields[formType].map((field) => (
              <Controller
                key={field.name}
                name={field.name as keyof FormData}
                control={control}
                rules={field.rules}
                render={({ field: controllerField }) => (
                  <ValidatedInput
                    {...controllerField}
                    className={
                      formType === FormType.registration
                        ? styles.input
                        : classNames(styles.input, styles.input_login)
                    }
                    variant={WUIInputVariant.filledGray}
                    label={field.label}
                    type={field.type}
                    error={!!errors[field.name as keyof FormData]}
                    showValidation={showValidation}
                    helperText={
                      errors[field.name as keyof FormData]?.message || ""
                    }
                  />
                )}
              />
            ))}
          </div>
        </form>
        <div className={styles.rightContainer}>
          {formType === FormType.registration && (
            <ImageUploader onImageChange={handleImageChange} />
          )}
          <div className={styles.actions}>
            <Button
              onClick={handleButtonClick}
              type="submit"
              className={styles.submitButton}
            >
              {formType === FormType.login ? "Sign In" : "Register"}
            </Button>
            {onClose && formType === FormType.registration && (
              <Button onClick={onClose} className={styles.cancelButton}>
                Cancel
              </Button>
            )}
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Form;
