import React, { useEffect, useState, useCallback } from "react";
import { Element, scroller } from "react-scroll";
import styles from "./FullPageWrapper.module.scss";
import HeroSection from "@/components/heroSection/heroSection";
import FeaturesSlider from "@/components/featuresGrid/featuresGrid";
import AuthorSection from "@/components/AuthorSection/AuthorSection";
import { useTranslation } from "react-i18next";
import { ArrowDownIcon, ArrowUpIcon } from "@/components/WUIIcon";
import { debounce, IconButton } from "@mui/material";

const FullPageWrapper: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<number>(0);
  const { t } = useTranslation();

  const sections: string[] = [
    t("landing.sections.hero"),
    t("landing.sections.features"),
    t("landing.sections.contact"),
  ];

  const scrollToSection = useCallback(
    (sectionIndex: number) => {
      const sectionName = sections[sectionIndex];
      scroller.scrollTo(sectionName, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
      setCurrentSection(sectionIndex);
    },
    [sections]
  );

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const currentSectionIndex = Math.round(scrollY / viewportHeight);

    if (currentSection !== currentSectionIndex) {
      setCurrentSection(currentSectionIndex);
      scrollToSection(currentSectionIndex);
    }
  }, [currentSection, scrollToSection]);

  useEffect(() => {
    const debouncedHandleScroll = debounce(handleScroll, 100);

    window.addEventListener("scroll", debouncedHandleScroll);
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, [handleScroll]);

  return (
    <div>
      <Element name={sections[0]} className={styles.hero}>
        <IconButton
          className={`${styles.arrow} ${styles.arrowDown} ${
            currentSection === 0 ? styles.show : styles.hide
          }`}
          onClick={() => scrollToSection(1)}
        >
          <ArrowDownIcon />
        </IconButton>
        <HeroSection />
      </Element>
      <Element name={sections[1]} className={styles.slider}>
        <IconButton
          className={`${styles.arrow} ${styles.arrowUp} ${
            currentSection === 1 ? styles.show : styles.hide
          }`}
          onClick={() => scrollToSection(0)}
        >
          <ArrowUpIcon />
        </IconButton>
        <IconButton
          className={`${styles.arrow} ${styles.arrowDown} ${
            currentSection === 1 ? styles.show : styles.hide
          }`}
          onClick={() => scrollToSection(2)}
        >
          <ArrowDownIcon />
        </IconButton>
        <FeaturesSlider />
      </Element>
      <Element name={sections[2]} className={styles.hero}>
        <IconButton
          className={`${styles.arrow} ${styles.arrowUp} ${
            currentSection === 2 ? styles.show : styles.hide
          }`}
          onClick={() => scrollToSection(1)}
        >
          <ArrowUpIcon />
        </IconButton>
        <AuthorSection />
      </Element>
    </div>
  );
};

export default FullPageWrapper;
