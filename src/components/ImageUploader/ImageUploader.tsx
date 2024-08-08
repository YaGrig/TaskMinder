import React, { useState, useEffect } from "react";
import { Avatar } from "@mui/material";
import styles from "./ImageUploader.module.scss";

interface ImageUploaderProps {
  onImageChange: (file: File) => void;
  initialImageUrl?: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
  onImageChange,
  initialImageUrl,
}) => {
  const [profileImageUrl, setProfileImageUrl] = useState<string>(
    initialImageUrl || ""
  );

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      console.error("No file selected for upload.");
      return;
    }
    const fileUrl = URL.createObjectURL(file);
    setProfileImageUrl(fileUrl);
    onImageChange(file);
  };

  useEffect(() => {
    if (initialImageUrl) {
      setProfileImageUrl(initialImageUrl);
    }
  }, [initialImageUrl]);

  return (
    <>
      <input
        accept="image/*"
        type="file"
        onChange={handleImageChange}
        id="avatar-upload"
        style={{ display: "none" }}
      />
      <label
        htmlFor="avatar-upload"
        className={styles.avatar}
        style={{
          backgroundImage: `url(${profileImageUrl})`,
          backgroundSize: "cover",
          cursor: "pointer",
        }}
      >
        {!profileImageUrl && <Avatar className={styles.avatar} />}
      </label>
    </>
  );
};

export default ImageUploader;
