import React, { FC, useEffect, useMemo, useState } from "react";
import styles from "./SelectCard.module.scss";
import { downloadUserAvatar } from "../../../pages/api/files";
import { CloseIcon } from "../WUIIcon";
import { AccountCircle } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Image from "next/image";
import { User } from "@/apollo/generated-hooks";

type ParticipantCardProps = {
  user?: User;
  email?: string;
  onRemove?: () => void;
};

export const SelectCard: FC<ParticipantCardProps> = ({
  user,
  email,
  onRemove,
}) => {
  const [userAvatar, setUserAvatar] = useState<string>("");
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

  const renderDescription = () => {
    const name = user?.username;
    const descriptionText = email;

    return (
      <>
        {name && <div className={styles.name}>{name}</div>}
        {descriptionText && (
          <div className={styles.email}>{descriptionText}</div>
        )}
      </>
    );
  };

  const renderRemoveButton = () => (
    <div className={styles.removeButton} onClick={onRemove}>
      <CloseIcon size={20} />
    </div>
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        {userAvatar ? (
          <Image
            src={userAvatar}
            alt="User Avatar"
            className={styles.avatar}
            width={32}
            height={32}
          />
        ) : (
          <IconButton color="inherit">
            <AccountCircle className={styles.avatar} fontSize="large" />
          </IconButton>
        )}
        <div className={styles.description}>{renderDescription()}</div>
      </div>
      {onRemove && renderRemoveButton()}
    </div>
  );
};
