import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import { createPortal } from "react-dom";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DatePicker.module.scss";
import { format } from "date-fns";
import { ControllerRenderProps } from "react-hook-form";

interface Position {
  top: number;
  left: number;
}

interface DateInputProps {
  field?: ControllerRenderProps<any, any>;
  position?: Position;
  className?: string;
  setIsOpen?: (isOpen: boolean) => void;
  onChange?: (
    date: Date | null,
    event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
  ) => void;
}

const DateInput: React.FC<DateInputProps> = ({
  field,
  position,
  setIsOpen,
  className,
  onChange,
}) => {
  const defaultValue = format(new Date(), "yyyy-MM-dd");
  const [startDate, setStartDate] = useState<Date | null>(
    field?.value || defaultValue
  );
  const datePickerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setStartDate(field?.value || defaultValue);
  }, [field?.value, defaultValue]);

  const handleChange = (
    date: Date | null,
    event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
  ) => {
    setStartDate(date);
    if (onChange) {
      onChange(date, event);
    } else {
      field?.onChange(date);
    }
    setIsOpen && setIsOpen(false);
  };

  const handleClickOutside = (event: Event) => {
    if (datePickerRef.current) {
      const datePicker: HTMLElement = datePickerRef.current;
      if (event.target instanceof Node && !datePicker.contains(event.target)) {
        setIsOpen && setIsOpen(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const datePickerElement = (
    <div
      ref={datePickerRef}
      className={position && styles.datePickerContainer || className && className}
      data-date="date"
      style={position ? { top: position.top, left: position.left } : {}}
    >
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        className={styles.datePicker}
        calendarClassName={styles.calendar}
      />
    </div>
  );

  if (position) {
    return createPortal(datePickerElement, document.body);
  }

  return datePickerElement;
};

export default DateInput;
