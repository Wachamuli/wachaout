import { BaseHtmlAttributes } from "../interfaces/BaseProps";
import styles from "styles/Button.module.css";

function Button({ id, className, style, children }: BaseHtmlAttributes) {
  return (
    <button id={id} className={`${className} ${styles.btn}`} style={style}>
      {children}
    </button>
  );
}

export default Button;
