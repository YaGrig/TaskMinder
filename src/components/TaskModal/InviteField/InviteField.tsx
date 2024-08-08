import React, { useMemo } from "react";
import styles from "./InviteField.module.scss";
import { CustomSelect } from "../UserSelect/UserSelect";
import { SelectCard } from "@/components/SelectCard/SelectCard";
import { User } from "@/apollo/generated-hooks";

export enum SelectType {
  USER,
  PROJECT,
  TYPE,
  PRIORITY,
  STATUS,
}

interface InviteFieldProps {
  user?: User | string;
  isShowUserSelect?: boolean;
  type: SelectType;
  clearCallback?: () => void;
  errorMessage?: string;
  setSelecteduse?: (value: string) => void;
  isRepresentative?: boolean;
  setSelectedValue?: (value: string) => void;
  handleChange?: (email: string) => void;
  handleClickAdd?: () => void;
  excludeIds?: string[];
  placeholder?: string;
  onChange?: (value: string) => void;
}

const InviteField: React.FC<InviteFieldProps> = ({
  user,
  errorMessage,
  clearCallback,
  setSelectedValue,
  isShowUserSelect,
  placeholder,
  type,
  onChange,
}) => {
  const handleChange = (selectedValue: string) => {
    if (setSelectedValue) {
      setSelectedValue(selectedValue);
    }

    onChange && onChange(selectedValue);
  };

  return (
    <>
      {isShowUserSelect && user ? (
        <SelectCard
          user={user as User}
          email={(user as User).email}
          onRemove={clearCallback && clearCallback}
        />
      ) : (
        <div className={styles.inviteFieldsContainer}>
          <CustomSelect
            onChange={handleChange}
            errorMessage={errorMessage}
            selectedValue={user as string}
            placeholder={placeholder}
            type={type}
          />
        </div>
      )}
    </>
  );
};

export default InviteField;
