import { CSSProperties, ReactNode } from "react";

export interface BaseHtmlAttributes {
  id?: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}