import React, {
  FC,
  MouseEventHandler,
  PropsWithChildren,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";
import { KeyboardKeys } from "./types";
import { WUIModalHeader } from "./WUIModalHeader";
import styles from "./WUIModal.module.scss";

export type WUIModalProps = {
  open: boolean;
  onClose?: () => void;
  closeIcon?: boolean;
  title?: string;
  titleClassName?: string;
  transparent?: boolean;
  className?: string;
  classNameContent?: string;
  classNameHeader?: string;
  classNameCloseIcon?: string;
  closeIconSize?: number;
  children: ReactNode;
  childrenClassname?: string;
  systemMessage?: string;
  stopPropagationOnMouseDown?: boolean;
  disableClickOutside?: boolean;
};

export const WUIModal: FC<PropsWithChildren<WUIModalProps>> = ({
  open,
  onClose,
  closeIcon = true,
  children,
  title,
  titleClassName,
  transparent,
  className,
  classNameContent,
  classNameHeader,
  classNameCloseIcon,
  closeIconSize,
  childrenClassname,
  systemMessage,
  stopPropagationOnMouseDown,
  disableClickOutside,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      const bodyElement = document.getElementsByTagName("body")[0];
      bodyElement.classList.add(styles.modalOpen);

      return () => {
        bodyElement.classList.remove(styles.modalOpen);
      };
    }
  }, [open]);

  const handleClickOutside: MouseEventHandler = (e) => {
    if (disableClickOutside) return;
    if (stopPropagationOnMouseDown) {
      e.stopPropagation();
    }
    if (e.currentTarget === e.target) {
      onClose && onClose();
    }
  };

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event?.key === KeyboardKeys.Escape && onClose) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyDown]);

  const renderHeader = () => (
    <WUIModalHeader
      title={title}
      className={classNameHeader}
      titleClassName={titleClassName}
      closeIcon={closeIcon}
      closeIconSize={closeIconSize}
      classNameCloseIcon={classNameCloseIcon}
      onClose={onClose}
    />
  );

  const renderModal = () => (
    <div
      className={classNames("wui-modal", styles.modal, className)}
      onMouseDown={handleClickOutside}
      onClick={(e) => e.stopPropagation()}
    >
      <div
        ref={modalRef}
        className={classNames(
          classNameContent,
          styles.modal_content,
          transparent && styles.hidden
        )}
      >
        {systemMessage && (
          <div className={styles.systemMessage}>{systemMessage}</div>
        )}
        {!transparent && renderHeader()}
        <div
          className={classNames(
            "wui-modal-content-child",
            styles.modal_content_child,
            childrenClassname
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );

  return open ? createPortal(renderModal(), document.body) : null;
};
