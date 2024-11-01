import React from "react";
import styles from "../styles.module.scss";
import { getRegExp, getSentenceFromCamelCase } from "./Helpers";
import { InputProps } from "../../interface/form";

const PasswordInput = ({
  checked,
  className,
  disabled,
  error,
  fixLength,
  required,
  label,
  minLength,
  maxLength,
  name,
  onChange,
  placeholder,
  reqType,
  style,
  validationHandler,
  value,
  size,
  labelClassName,
}: InputProps) => {
  const [show, setShow] = React.useState<boolean>(false);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    let inputValue: string | boolean;

    if (type === "checkbox") {
      inputValue = checked;
    } else {
      inputValue = value;
    }

    onChange && onChange(name, inputValue);
  };

  const onValidationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!validationHandler) return;
    const { value } = event.target;
    let errorMessage = "";

    if (!value && required) {
      errorMessage = `Please enter ${getSentenceFromCamelCase(name)}.`;
    } else if (minLength && value.length < minLength) {
      errorMessage = `${
        name.charAt(0).toUpperCase() + getSentenceFromCamelCase(name).slice(1)
      } must be at least ${minLength} characters long.`;
    } else if (maxLength && value.length > maxLength) {
      errorMessage = `${
        name.charAt(0).toUpperCase() + getSentenceFromCamelCase(name).slice(1)
      } must be ${minLength} characters long.`;
    } else if (fixLength && value.length !== fixLength) {
      errorMessage = `${
        name.charAt(0).toUpperCase() + getSentenceFromCamelCase(name).slice(1)
      } must be ${fixLength} characters.`;
    } else if (value && reqType) {
      const regExp = getRegExp(reqType) as RegExp;
      if (!regExp.test(value)) {
        errorMessage = `Please enter valid ${getSentenceFromCamelCase(name)}.`;
      }
    }

    validationHandler(name, errorMessage);
  };

  return (
    <div className={`${styles.InputContainer} ${styles[size ? size : ""]}`}>
      <label htmlFor={name} className={labelClassName}>
        {label} {required && <span className={styles.required}>&nbsp;*</span>}
      </label>

      {error ? (
        <span className={`${styles.required} ${styles.textSmall}`}>
          {error}
        </span>
      ) : null}
      <input
        type={show ? "text" : "password"}
        name={name}
        id={name}
        value={value}
        checked={checked}
        placeholder={placeholder}
        className={`${styles.blackBorder} ${className}`} // Ensure className is included here
        required={required}
        style={style}
        disabled={disabled}
        onChange={onChangeHandler}
        onBlur={onValidationChange}
      />
      <span className={styles.passwordIcon}>
        {show ? (
          <span onClick={() => setShow(!show)}>HIDE</span>
        ) : (
          <span onClick={() => setShow(!show)}>SHOW</span>
        )}
      </span>
    </div>
  );
};

export default PasswordInput;
