import React, { forwardRef } from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import styles from "./Input.module.scss";
import ValidationCircle from "./ValidationCircle/ValidationCircle";
import { WUIInputProps, WUIInputRef } from "./WUIInput";
import classNames from "classnames";

interface ValidatedInputProps extends WUIInputProps {
  showValidation?: boolean;
}

export const ValidatedInput = forwardRef<WUIInputRef, ValidatedInputProps>(
  ({ label, error, className, showValidation = true, ...otherProps }, ref) => {
    const style = {
      "& label.Mui-focused": {
        color: "lightGray",
      },
      "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
          borderColor: "lightGray",
        },
      },
    };

    return (
      <TextField
        {...(otherProps as TextFieldProps)}
        inputRef={ref}
        className={classNames(
          styles.validatedInput,
          styles.validatedInput__container,
          className
        )}
        variant="outlined"
        error={!!error}
        label={label}
        helperText={error ? error : ""}
        InputProps={{
          className: styles.validatedInput__input,
          endAdornment: (
            <InputAdornment position="end">
              <ValidationCircle
                isEmpty={!showValidation}
                isValidated={showValidation && !error && !!otherProps.value}
                errorMessage={otherProps.helperText}
              />
            </InputAdornment>
          ),
        }}
        FormHelperTextProps={{
          className: styles.validatedInput__error,
        }}
        sx={style}
      />
    );
  }
);

ValidatedInput.displayName = "ValidatedInput";

export default ValidatedInput;
