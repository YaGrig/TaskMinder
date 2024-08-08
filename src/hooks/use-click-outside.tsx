import { MutableRefObject, useEffect } from 'react';

export type UseClickOutsideProps = {
  refElement: MutableRefObject<HTMLElement>;
  callback: (e?: MouseEvent | TouchEvent) => void;
  isCheck?: boolean;
  additionalContainer?: Element;
  refAdditionalContainer?: MutableRefObject<HTMLElement>;
  customCondition?: (e: MouseEvent | TouchEvent) => boolean;
};

interface UseClickOutside {
  (props: UseClickOutsideProps): void;
}

export const useClickOutside: UseClickOutside = ({
  refElement,
  callback,
  isCheck = true,
  additionalContainer,
  refAdditionalContainer,
  customCondition
}) => {
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (isCheck) {
      const eventListener = (e: MouseEvent | TouchEvent) => checkClickOutside(e);
      document.addEventListener('mousedown', eventListener);
      document.addEventListener('touchstart', eventListener, { passive: false });

      return () => {
        document.removeEventListener('mousedown', eventListener);
        document.removeEventListener('touchstart', eventListener);
      };
    }
  }, [isCheck, refElement, additionalContainer, refAdditionalContainer, customCondition]);

  const checkClickOutside = (e: MouseEvent | TouchEvent) => {
    const target = e.target as HTMLElement;
    const isNotMainContainerClick = !refElement?.current?.contains(target);
    const container = additionalContainer || refAdditionalContainer?.current;
    const isNotAdditionalContainerClick = !container?.contains(target);

    const custom = customCondition ? customCondition(e) : true;

    if (isNotMainContainerClick && isNotAdditionalContainerClick && custom) {
      callback(e);
    }
  };
};
