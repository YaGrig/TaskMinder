import React, {
  useState,
  useEffect,
  forwardRef,
  useRef,
  MutableRefObject,
  ReactNode,
  RefObject,
} from "react";
import ReactDOM from "react-dom";
import styles from "./WUIMenu.module.scss";
import classNames from "classnames";

export const MENU_ITEM = "menu-item";

interface WUIMenuProps {
  children: ReactNode;
  anchorEl?: HTMLElement | null;
  onClose?: () => void;
  wrapperRef?: MutableRefObject<HTMLElement | null> | RefObject<HTMLElement>;
  className?: string;
  location?: "top" | "right" | "bottom" | "left";
}

const getSafeMenuRef = (menuRef: React.RefObject<HTMLDivElement>) => {
  return menuRef.current as HTMLDivElement | null;
};

const WUIMenu: React.FC<WUIMenuProps> = forwardRef(
  ({ children, anchorEl, onClose, wrapperRef, className, location }, ref) => {
    const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if ((wrapperRef || anchorEl) && menuRef.current) {
        const element = wrapperRef ? wrapperRef.current : anchorEl;
        const anchorRect = element?.getBoundingClientRect();
        if (anchorRect) {
          console.log(element, anchorRect, "wht");
          const menuRect = getSafeMenuRef(menuRef)?.getBoundingClientRect();
          if (menuRect) {
            const position = {
              top: anchorRect.bottom,
              left: anchorRect.left,
            };
            switch (location) {
              case "top":
                position.top = anchorRect.top - menuRect.height;
                position.left = anchorRect.left;
                break;
              case "right":
                position.top = anchorRect.top;
                position.left = anchorRect.right;
                break;
              case "bottom":
                position.top = anchorRect.bottom;
                position.left = anchorRect.left;
                break;
              case "left":
                position.top = anchorRect.top;
                position.left = anchorRect.left - menuRect.width;
                break;
              default:
                break;
            }

            setMenuPosition(position);
          }
        }
      }
    }, [anchorEl, wrapperRef, location]);

    const handleClickOutside = (event: Event) => {
      console.log("?????????");
      const safeMenuRef = getSafeMenuRef(menuRef);
      if (safeMenuRef && !safeMenuRef.contains(event.target as Node)) {
        console.log(safeMenuRef.contains(event.target as Node), "?????");
        const isMenuItem = (event.target as HTMLElement).closest(`.${MENU_ITEM}`);
        if (!isMenuItem) {
          console.log("close");
          onClose && onClose();
        }
      }
    };

    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    useEffect(() => {
      document.addEventListener("scroll", handleClickOutside);
      return () => {
        document.removeEventListener("scroll", handleClickOutside);
      };
    }, []);

    return ReactDOM.createPortal(
      <div
        ref={menuRef}
        className={classNames(styles.location, styles.menu, className)}
        style={{ top: `${menuPosition.top}px`, left: `${menuPosition.left}px` }}
      >
        {children}
      </div>,
      document.body
    );
  }
);

WUIMenu.displayName = "WUIMenu";

export default WUIMenu;
