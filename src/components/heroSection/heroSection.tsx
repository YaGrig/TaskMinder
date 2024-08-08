import React from "react";
import { Box, Grid } from "@material-ui/core";
import styles from "./heroSection.module.scss";
import { Button } from "../dnd/Button";
import { WUIModal } from "../modal/WUIModal";
import { useModalState } from "@/api/hooks/use-modal-state";
import Form, { FormType } from "../registrationForm/loginForm";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const HeroSection = () => {
  const authentificationModal = useModalState();
  const registerModal = useModalState();
  const { t } = useTranslation();

  return (
    <>
      <Box maxWidth="lg" className={styles.heroContainer}>
        <LanguageSwitcher className={styles.switcher} />

        <Grid container className={styles.spacing}>
          <Grid item xs={12} md={8} className={styles.heroTypography}>
            <span className={styles.heroHeadline}>
              {t("heroSection.headline")}
            </span>
            <span className={styles.heroSubheadline}>
              {t("heroSection.subheadline1")}
            </span>
            <Button
              color="primary"
              className={styles.heroButton}
              onClick={() => registerModal.open()}
            >
              {t("heroSection.getStarted")}
            </Button>
            <span className={styles.heroSubheadline}>
              {t("heroSection.haveAccount")}
              <span onClick={() => authentificationModal.open()}>
                {t("heroSection.logIn")}
              </span>
            </span>
          </Grid>

          <Grid item xs={12} md={4} className={styles.heroTriangle}>
            <div className={styles.triangleShape}></div>
          </Grid>
        </Grid>
      </Box>

      {authentificationModal.opened && (
        <WUIModal
          open
          onClose={authentificationModal.close}
          title={t("modal.createTask")}
          transparent
        >
          <Form formType={FormType.login} onClose={authentificationModal.close} />
        </WUIModal>
      )}
      {registerModal.opened && (
        <WUIModal
          open
          closeIcon
          onClose={registerModal.close}
          title={t("modal.createTask")}
          transparent
        >
          <Form formType={FormType.registration} onClose={registerModal.close} />
        </WUIModal>
      )}
    </>
  );
};

export default HeroSection;
