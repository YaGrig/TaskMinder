import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import styles from "./LanguageSwitcher.module.scss";

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  useEffect(() => {
    handleLanguageChange("ru");
  }, []);

  const handleLanguageChange = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={classNames(styles.switcherContainer, className)}>
      <button
        className={classNames(styles.tab, {
          [styles.active]: currentLanguage === "en",
        })}
        onClick={() => handleLanguageChange("en")}
      >
        English
      </button>
      <button
        className={classNames(styles.tab, {
          [styles.active]: currentLanguage === "ru",
        })}
        onClick={() => handleLanguageChange("ru")}
      >
        Русский
      </button>
    </div>
  );
};

export default LanguageSwitcher;
