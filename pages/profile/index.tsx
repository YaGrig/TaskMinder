import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import ValidatedInput from "@/components/Input/Input";
import {
  User,
  useUpdateUserMutation,
  useUserByIdQuery,
} from "@/apollo/generated-hooks";
import { Button } from "@/components/dnd/Button";
import { downloadUserAvatar, uploadFile } from "../api/files";
import { useTranslation } from "react-i18next";
import { useSnackbar } from "notistack";
import style from "./style.module.scss";
import ImageUploader from "@/components/ImageUploader/ImageUploader";

interface ProfileData {
  firstname: string;
  lastname: string;
  email: string;
  password?: string;
  avatar?: string;
  confirmPassword?: string;
}

const ProfilePage: React.FC = () => {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm<ProfileData>();
  const { data, loading, refetch } = useUserByIdQuery();
  const [updateUser] = useUpdateUserMutation();
  const { enqueueSnackbar } = useSnackbar();
  const [userAvatar, setUserAvatar] = useState<string | null>(null);
  const [newAvatarFile, setNewAvatarFile] = useState<File | null>(null);
  const user = data?.userById as User;

  useEffect(() => {
    const getAvatar = async () => {
      try {
        const imageUrl = await downloadUserAvatar();
        setUserAvatar(`data:image/jpeg;base64,${imageUrl}`);
      } catch (error) {
        console.error("Error fetching avatar:", error);
      }
    };

    getAvatar();
  }, []);

  useEffect(() => {
    if (data && !loading) {
      setValue("firstname", user.firstname ?? "");
      setValue("email", user.email ?? "");
      setValue("lastname", user.lastname ?? "");
    }
  }, [data, loading, setValue, user]);

  const fieldAttributes = {
    firstname: {
      name: "firstname" as keyof ProfileData,
      label: t("profile.firstName"),
      rules: { required: t("profile.requiredName") },
      defaultValue: "",
    },
    email: {
      name: "email" as keyof ProfileData,
      label: t("profile.email"),
      rules: {
        required: t("profile.requiredEmail"),
        pattern: {
          value: /\S+@\S+\.\S+/,
          message: t("profile.invalidEmail"),
        },
      },
      defaultValue: "",
    },
    lastname: {
      name: "lastname" as keyof ProfileData,
      label: t("profile.lastName"),
      rules: { required: t("profile.requiredLastName") },
      defaultValue: "",
    },
  };

  const handleAvatarChange = (file: File) => {
    setNewAvatarFile(file);
    const fileUrl = URL.createObjectURL(file);
    setUserAvatar(fileUrl);
  };

  const onSubmit = async (formData: ProfileData) => {
    const { confirmPassword, ...updateData } = formData;

    try {
      if (newAvatarFile) {
        const response = await uploadFile("avatar", newAvatarFile);
        updateData.avatar = response.path;
      }

      await updateUser({
        variables: {
          input: updateData,
        },
      });

      enqueueSnackbar("Profile updated successfully!", { variant: "success" });

      refetch().then(() => {
        window.location.reload();
      });
    } catch (error) {
      console.error("Profile update failed:", error);
      enqueueSnackbar("Failed to update profile.", { variant: "error" });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.container}>
      <div className={style.containerUpper}>
        <form onSubmit={handleSubmit(onSubmit)} className={style.profilePage}>
          {Object.entries(fieldAttributes).map(
            ([key, { name, label, rules, defaultValue }]) => (
              <Controller
                key={name}
                name={name}
                control={control}
                defaultValue={
                  ((user && name in user
                    ? user[name as keyof User]
                    : defaultValue) || defaultValue) as string
                }
                rules={rules}
                render={({ field }) => (
                  <ValidatedInput
                    {...field}
                    label={label}
                    className={style.input}
                    error={!!errors[name]}
                  />
                )}
              />
            )
          )}
          <div>
            <h5>{t("profile.changePassword")}</h5>
            <div className={style.passwordContainer}>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{}}
                render={({ field }) => (
                  <ValidatedInput
                    {...field}
                    label={t("profile.newPassword")}
                    className={style.input}
                    type="password"
                    error={errors["password"] as unknown as boolean}
                  />
                )}
              />
              <Controller
                name="confirmPassword"
                control={control}
                defaultValue=""
                rules={{
                  validate: (value) =>
                    !watch("password") ||
                    value === watch("password") ||
                    t("profile.passwordsMatch"),
                }}
                render={({ field }) => (
                  <ValidatedInput
                    {...field}
                    label={t("profile.confirmPassword")}
                    className={style.input}
                    type="password"
                    error={errors["confirmPassword"] as unknown as boolean}
                  />
                )}
              />
            </div>
          </div>
          <Button type={"submit"} color="primary" className={style.button}>
            {t("profile.saveProfile")}
          </Button>
        </form>
        <ImageUploader
          initialImageUrl={userAvatar as string}
          onImageChange={handleAvatarChange}
        />
      </div>
    </div>
  );
};

export default ProfilePage;
