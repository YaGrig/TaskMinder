import React from "react";
import styles from "./AuthorSection.module.scss";
import { useTranslation } from "react-i18next";
import Image from "next/image";

interface AuthorSectionProps {
  onScroll?: () => void;
}

const toolsAndTechnologies = {
  frontEnd: [
    "React",
    "Next.js",
    "Material-UI",
    "Apollo Client",
    "GraphQL",
    "DND Kit",
    "Chart.js",
    "Recharts",
  ],
  backEnd: [
    "Spring Boot",
    "Spring Framework",
    "GraphQL",
    "MySQL Connector J",
    "JJWT",
    "Dropbox Core SDK",
    "Lombok",
  ],
};

const AuthorSection: React.FC<AuthorSectionProps> = ({ onScroll }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.authorSection}>
      <div className={styles.header}>
        <span className={styles.heroHeadline}>
          {t("authorSection.headline")}
        </span>
        <span className={styles.heroSubheadline}>
          {t("authorSection.subheadline")}
        </span>
      </div>
      <div className={styles.info}>
        <div className={styles.authorContainer}>
          <h2 className={styles.title}>{t("authorSection.aboutTheAuthor")}</h2>
          <ul className={styles.linkList}>
            <li>
              <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("authorSection.linkedin")}
              </a>
            </li>
            <li>
              <a
                href="https://github.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("authorSection.github")}
              </a>
            </li>
            <li>
              <a href="mailto:yashagrigorevldn@gmail.com">
                {t("authorSection.email")}
              </a>
            </li>
          </ul>
          <Image src="/images/profile.png"  width={270} height={290} alt='profileImg'/>
        </div>
        <div className={styles.toolContainer}>
          <div className={styles.column}>
            <h4 className={styles.category}>{t("authorSection.frontEnd")}</h4>
            <ul className={styles.toolsList}>
              {toolsAndTechnologies.frontEnd.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
          </div>
          <div className={styles.column}>
            <h4 className={styles.category}>{t("authorSection.backEnd")}</h4>
            <ul className={styles.toolsList}>
              {toolsAndTechnologies.backEnd.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorSection;
