import React, { useState, useRef, useEffect, useMemo } from "react";
import style from "./UserSelect.module.scss";
import { useMyClassPageContext } from "@/components/Providers/ProviderTask";
import { SelectType } from "../InviteField/InviteField";
import { Project, User } from "@/apollo/generated-hooks";

type Option = User | Project;

interface CustomSelectProps {
  onChange: (value: string) => void;
  selectedValue: string;
  placeholder?: string;
  type: SelectType;
  errorMessage?: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  onChange,
  selectedValue,
  placeholder,
  type,
  errorMessage,
}) => {
  const {
    usersData,
    projectData,
    setFilterUser,
    filterUser,
    setFilterProject,
    filterProject,
  } = useMyClassPageContext();

  const data: Option[] = useMemo(() => {
    return type === SelectType.USER ? usersData ?? [] : projectData ?? [];
  }, [projectData, type, usersData]);

  const filter = useMemo(
    () => (type === SelectType.USER ? filterUser : filterProject),
    [filterUser, filterProject, type]
  );
  const setFilter = useMemo(
    () => (type === SelectType.USER ? setFilterUser : setFilterProject),
    [setFilterProject, setFilterUser, type]
  );

  const [isListOpen, setIsListOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      setIsListOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (selectedValue) {
      const selectedOption = data?.find((option) =>
        type === SelectType.USER
          ? (option as User).email === selectedValue
          : (option as Project).id === selectedValue
      );
      if (selectedOption) {
        setFilter &&
          setFilter(
            type === SelectType.USER
              ? (selectedOption as User).username ?? ""
              : (selectedOption as Project).title ?? ""
          );
      }
    }
  }, [selectedValue, data, setFilter, type]);

  const handleChangeInput = (value: string) => {
    setFilter && setFilter(value);
    setIsListOpen(true);
  };

  const handleSelect = (option: Option) => {
    onChange(type === SelectType.USER ? (option as User).email : option.id);
    setFilter &&
      setFilter(
        type === SelectType.USER
          ? (option as User).username ?? ""
          : (option as Project).title ?? ""
      );
    setIsListOpen(false);
  };

  const renderHelperText = useMemo(() => {
    if (!errorMessage) return null;
    return <p className={style.error}>{errorMessage}</p>;
  }, [errorMessage]);

  return (
    <div ref={wrapperRef} className={style.relativeContainer}>
      <input
        type="text"
        value={filter || ""}
        className={style.input}
        onChange={(e) => handleChangeInput(e.target.value)}
        placeholder={placeholder || "Начните вводить..."}
        onClick={() => setIsListOpen(true)}
      />
      {renderHelperText}
      {isListOpen && (
        <ul className={style.list}>
          {data?.map((option) => (
            <li key={option.id} onClick={() => handleSelect(option)}>
              {type === SelectType.USER
                ? (option as User).username
                : (option as Project).title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
