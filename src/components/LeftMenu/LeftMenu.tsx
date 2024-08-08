import { Drawer } from "@mui/material";
import style from "./LeftMenu.module.scss";
import ListMenu from "../List/List";
import { HomeIcon } from "../WUIIcon";
import { useRouter } from "next/router";
import { Routes } from "@/Routes";
import { useEffect } from "react";
import { useBreakpointContext } from "../Providers/ProviderMenu";
import Image from "next/image";

const LeftMenu = () => {
  const router = useRouter();
  const { isMobile, isMobileMenuOpen, setIsMobileMenuOpen } =
    useBreakpointContext();

  useEffect(() => {
    console.log(isMobileMenuOpen, "check");
  }, [isMobileMenuOpen]);

  const handleMenuClick = () => {
    router.push(Routes.dashboard());
  };

  const handleClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {!isMobile && (
        <Drawer
          anchor="left"
          variant="persistent"
          PaperProps={{ className: style.paper }}
          open
          className={style.drawer}
        >
          <div className={style.logo} onClick={handleMenuClick}>
            <Image src="/images/logo.png" alt="logo" width={30} height={30} />
            TaskMinder
          </div>
          <ListMenu />
        </Drawer>
      )}
      {isMobile && (
        <Drawer
          anchor="right"
          variant="temporary"
          PaperProps={{ className: style.paper }}
          open={isMobileMenuOpen}
          onClose={handleClose}
          className={style.drawer}
        >
          <div className={style.logo} onClick={handleMenuClick}>
            <HomeIcon size={30} />
            TaskMinder
          </div>
          <ListMenu />
        </Drawer>
      )}
    </>
  );
};

export default LeftMenu;
