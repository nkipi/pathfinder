import classNames from "classnames";
import React from "react";
import { OptionalClassName } from "../../interfaces/optionalClassName";
import styles from "./helper.module.scss";

export const Helper: React.FC<OptionalClassName> = ({
  className,
  children,
}) => {
  return <p className={classNames(className, styles.helper)}>{children}</p>;
};
