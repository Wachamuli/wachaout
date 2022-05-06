import { BaseHtmlAttributes } from "../interfaces/BaseProps";
import styles from "styles/Button.module.css";
import { ForwardedRef, forwardRef } from "react";

const Button = forwardRef(
  (
    { id, className, style, children }: BaseHtmlAttributes,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <button
        id={id}
        className={`${className} ${styles.btn}`}
        style={style}
        ref={ref}
      >
        {children}
      </button>
    );
  },
);

export default Button;
