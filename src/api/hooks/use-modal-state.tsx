import {
  useCallback,
  useMemo,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

export type ModalStateGenericType<T> = {
  opened: boolean;
  open(data?: T): void;
  close(): void;
  turnOpened(): void;
  modalData: T | null;
  setModalData: Dispatch<SetStateAction<T | null>>;
};

export const useModalState = <ModalData extends Record<string, any>>(
  initialOpened?: boolean
): ModalStateGenericType<ModalData> => {
  const [opened, setOpened] = useState<boolean>(initialOpened || false);
  const [modalData, setModalData] = useState<ModalData | null>(null);

  const close = useCallback(() => {
    setModalData(null);
    setOpened(false);
  }, []);

  const open = useCallback((data?: ModalData) => {
    if (data) {
      setModalData(data);
    }
    setOpened(true);
  }, []);

  const turnOpened = useCallback(() => {
    setOpened(!opened);
  }, [opened]);

  return useMemo(
    () => ({
      opened,
      open,
      close,
      turnOpened,
      modalData,
      setModalData,
    }),
    [opened, open, close, turnOpened, modalData, setModalData]
  );
};
