import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image, { StaticImageData } from "next/image";
import Typography from "@mui/material/Typography";
import styles from "./featureCard.module.scss";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: StaticImageData;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <Card className={styles.card}>
      <CardContent className={styles.content}>
        <Typography variant="h5" component="div" className={styles.title}>
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
        <Image
          src={icon}
          alt={`${title} icon`}
          width={100}
          height={100}
          className={styles.icon}
        />
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
