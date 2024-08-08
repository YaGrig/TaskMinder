import React, { useEffect, useState } from "react";
import styles from "./userCircle.module.scss";
import { downloadUserAvatar } from "../../../pages/api/files";
import Image from "next/image";
import { User } from "@/apollo/generated-hooks";

interface UserCircleProps {
  user: User;
}

const UserCircle: React.FC<UserCircleProps> = ({ user }) => {
  const defaultImage = "/path/to/default/image.png";
  const [avatar, setAvatar] = useState<string>("");

  useEffect(() => {
    const getAvatar = async () => {
      try {
        const imageUrl = await downloadUserAvatar();
        setAvatar(`data:image/jpeg;base64,${imageUrl}`);
      } catch (error) {
        console.error("Error fetching avatar:", error);
      }
    };

    getAvatar();
  }, []);

  return (
    <div className={styles.stack}>
      <div className={styles.avatar}>
        <img src={avatar || defaultImage} alt={`User ${user?.firstname}`} />
      </div>
    </div>
  );
};

export default UserCircle;
