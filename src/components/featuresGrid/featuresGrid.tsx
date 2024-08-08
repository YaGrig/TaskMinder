import React, { useMemo } from "react";
import Slider from "react-slick";
import FeatureCard from "../featureCard/featureCard";
import features from "./utils";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./featuresGrid.module.scss";
import { useBreakpointContext } from "../Providers/ProviderMenu";
import { useTranslation } from "react-i18next";

const FeaturesSlider: React.FC = () => {
  const { isMobile, isTablet, isLG } = useBreakpointContext();
  const { t } = useTranslation();

  const slides = useMemo(() => {
    if (!isLG) {
      return 4;
    }
    if (isMobile) {
      return 1;
    } else if (isTablet) {
      return 2;
    } else {
      return 3;
    }
  }, [isLG, isMobile, isTablet]);

  const settings = useMemo(() => {
    return {
      dots: false,
      infinite: true,
      speed: 2000,
      slidesToShow: slides,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    };
  }, [slides]);

  return (
    <div style={{ height: "100vh" }} className={styles.wrapper}>
      <span className={styles.heroHeadline}>
        {t("featuresSlider.headline")}
      </span>
      <span className={styles.heroSubheadline}>
        {t("featuresSlider.subheadline")}
      </span>
      <div className={styles.container}>
        <Slider arrows={false} {...settings}>
          {features.map((feature, index) => (
            <div key={index}>
              <FeatureCard
                title={t(`features.${feature.key}.title`)}
                description={t(`features.${feature.key}.description`)}
                icon={feature.icon}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturesSlider;
