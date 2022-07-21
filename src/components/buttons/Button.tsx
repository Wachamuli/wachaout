import { BaseHtmlAttributes } from "../interfaces/BaseProps";
import { ForwardedRef, forwardRef } from "react";
import Link from "next/link";

import styles from "styles/Button.module.css";

interface Button extends BaseHtmlAttributes {
  href?: string
}

const Button = forwardRef(
  (
    { id, className, style, children, href="#" }: Button,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <Link href={href}>
        <button
          id={id}
          className={`${className} ${styles.btn}`}
          style={style}
          ref={ref}
        >
          {children}
        </button>
      </Link>
    );
  },
);

export default Button;
