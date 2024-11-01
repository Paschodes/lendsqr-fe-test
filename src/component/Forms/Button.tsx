import { ButtonProps } from "../../interface/form";
import styles from "../styles.module.scss";

const Button = ({
  onClick,
  type = "submit",
  title,
  size = "medium",
  bgColor,
  className,
  disabled,
  loading,
  style,
}: ButtonProps) => {
  return (
    <div className={`${styles.InputContainer} ${styles[size ? size : ""]}`}>
      <button
        type={type}
        onClick={onClick}
        className={`${styles[bgColor ? bgColor : ""]} ${className}`}
        disabled={disabled || loading}
        style={style}
      >
        {title}
        {loading && <span className={styles.loading}></span>}
      </button>
    </div>
  );
};

export default Button;
