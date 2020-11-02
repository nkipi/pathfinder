import classNames from "classnames";
import React from "react";
import { OptionalClassName } from "../../interfaces/optionalClassName";
import styles from "./tag.module.scss";

export const Tag: React.FC<OptionalClassName> = ({
  className,
  children,
}) => {
  return <div className={classNames(className, styles.tag)}>{children}</div>;
};
