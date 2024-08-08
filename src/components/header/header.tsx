import React from "react";
import { AppBar } from "@mui/material";
import styles from "./header.module.scss";
import Actions from "./actions/Actions";
import { Button } from "../dnd";
import { useSnackbar } from "notistack";
import { useModalState } from "@/api/hooks/use-modal-state";
import { WUIModal } from "../modal/WUIModal";
import { TaskModal } from "../TaskModal/TaskModal";
import { ProjectModal } from "../ProjectModal/ProjectModal";
import { MenuIcon } from "../WUIIcon";
import { useBreakpointService } from "@/api/hooks/useBreakpointService";
import { useBreakpointContext } from "../Providers/ProviderMenu";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { enqueueSnackbar } = useSnackbar();
  const createTaskModal = useModalState();
  const createProjectModal = useModalState();
  const {t} = useTranslation();
  const { isMobile, isMobileMenuOpen, setIsMobileMenuOpen } =
    useBreakpointContext();

  const handle = () => {
    createTaskModal.open();
  };

  const handleMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleProject = () => {
    createProjectModal.open();
  };

  return (
    <AppBar position="sticky" className={styles.appBar}>
      <Actions />
      {isMobile && (
        <MenuIcon
          className={`${styles.menuMobile} ${
            isMobileMenuOpen ? styles.open : ""
          }`}
          onClick={handleMenuClick}
        />
      )}
      {!isMobile && (
        <div className={styles.actions}>
          <Button className={styles.button} onClick={handle}>
           {t("modal.createTask")}
          </Button>
          <Button className={styles.button} onClick={handleProject}>
            {t("modal.createProject")}
          </Button>
        </div>
      )}
      {createTaskModal.opened && (
        <WUIModal open onClose={createTaskModal.close} title={t("modal.createTask")}>
          <TaskModal onclose={createTaskModal.close} />
        </WUIModal>
      )}
      {createProjectModal.opened && (
        <WUIModal
          open
          onClose={createProjectModal.close}
          title={t("modal.createProject")}
        >
          <ProjectModal onClose={createProjectModal.close} />
        </WUIModal>
      )}
    </AppBar>
  );
};

export default Header;
