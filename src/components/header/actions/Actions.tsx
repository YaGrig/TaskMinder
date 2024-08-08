import { IconButton } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Actions.module.scss";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { ChevronDownIcon } from "@/components/WUIIcon";
import classNames from "classnames";
import { useModalState } from "@/api/hooks/use-modal-state";
import WUIMenu from "./WUIMenu";
import Image from "next/image";
import WUIMenuItem from "./WUIMenuItem/WUIMenuItem";
import { Routes } from "@/Routes";
import { downloadUserAvatar, logout } from "../../../../pages/api/files";
import { useUserByIdQuery } from "@/apollo/generated-hooks";
import { useRouter } from "next/router";

const Actions = () => {
  const onClick = () => {
    collapse.opened ? collapse.close() : collapse.open();
    menu.opened ? menu.close() : menu.open();
    console.log(collapse.opened, "opened", wrapperRef);
  };
  const router = useRouter();

  const { data } = useUserByIdQuery();
  const [userAvatar, setUserAvatar] = useState<string>("");
  const wrapperRef = useRef(null);

  useEffect(() => {
    const getAvatar = async () => {
      try {
        const imageUrl = await downloadUserAvatar();
        setUserAvatar(`data:image/jpeg;base64,${imageUrl}`);
      } catch (error) {
        console.error("Error fetching avatar:", error);
      }
    };

    getAvatar();
  }, []);

  const collapse = useModalState();
  const menu = useModalState();

  return (
    <div
      id="personMenuTrigger"
      onClick={onClick}
      ref={wrapperRef}
      className={styles.wrapper}
    >
      <div className={styles.wrapperLeft}>
        <div className={styles.imageWrapper}>
          {userAvatar ? (
            <Image
              src={userAvatar}
              alt="User Avatar"
              className={styles.image}
              width={32} 
              height={32} 
            />
          ) : (
            <IconButton color="inherit">
              <AccountCircle className={styles.reverses} fontSize="large" />
            </IconButton>
          )}
        </div>
        <div className={styles.nameWrapper}>
          <div className={styles.name}>{data?.userById?.firstname}</div>
          <div className={styles.userRole}>{data?.userById?.lastname}</div>
        </div>
      </div>
      <ChevronDownIcon
        size={24}
        className={classNames(
          styles.chevron,
          collapse.opened && styles.chevron_opened
        )}
      />

      {collapse.opened && (
        <WUIMenu
          wrapperRef={wrapperRef}
          className={classNames(menu.opened && styles.menu_opened)}
        >
          <WUIMenuItem
            title={"Personal profile"}
            onClick={() => {
              router.push(Routes.profile());
            }}
          />
          <WUIMenuItem
            title={"Exit"}
            onClick={() => {
              logout();
              router.push(Routes.landing());
            }}
          />
        </WUIMenu>
      )}
    </div>
  );
};

export default Actions;
