import React, { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Image from "next/image";
import styles from "./Avatar.module.scss";
import { downloadUserAvatar } from "../../../pages/api/files";

export const AvatarSizes = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
};

interface AvatarComponentProps {
  size?: keyof typeof AvatarSizes;
}

const sizeMap = {
  [AvatarSizes.SMALL]: 24,
  [AvatarSizes.MEDIUM]: 48,
  [AvatarSizes.LARGE]: 64,
};

const AvatarComponent: React.FC<AvatarComponentProps> = ({
  size = AvatarSizes.LARGE,
}) => {
  const [userAvatar, setUserAvatar] = useState<string | null>(null);

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

  const avatarSize = sizeMap[size];

  return (
    <div className={`${styles.avatarWrapper} ${styles[size]}`}>
      {userAvatar ? (
        <Image
          src={userAvatar}
          alt="User Avatar"
          className={styles.avatarImage}
          width={avatarSize}
          height={avatarSize}
        />
      ) : (
        <IconButton color="inherit">
          <AccountCircle className={styles.avatarIcon} fontSize="large" />
        </IconButton>
      )}
    </div>
  );
};

export default AvatarComponent;
