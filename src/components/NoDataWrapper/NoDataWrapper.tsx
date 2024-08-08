import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Puff } from "react-loader-spinner";
import styles from "./NoDataWrapper.module.scss";
import { useTranslation } from "react-i18next";

interface NoDataWrapperProps {
  children: React.ReactNode;
  data: boolean;
  loading?: boolean;
}

const NoDataWrapper: React.FC<NoDataWrapperProps> = ({
  children,
  data,
  loading,
}) => {
  const { t } = useTranslation();
  const wrapperRef = useRef(null);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      {children}
      {!data && (
        <div className={styles.noData}>{t("noDataWrapper.noDataMessage")}</div>
      )}
      {loading && (
        <div className={styles.noData}>
          <Puff
            visible={true}
            height="80"
            width="80"
            color="#FADADD"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
    </div>
  );
};

export default NoDataWrapper;
