import styles from "./MainLayout.module.scss";
import React from "react";
import Header from "../header/header";
import LeftMenu from "../LeftMenu/LeftMenu";
import { MyClassPageProvider } from "../Providers/ProviderTask";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <MyClassPageProvider>
      <div className={styles.mainLayout}>
        <LeftMenu />
        <div className={styles.contentArea}>
          <Header />
          <div className={styles.bubbly_background}>{children}</div>
        </div>
      </div>
    </MyClassPageProvider>
  );
};

export default MainLayout;
