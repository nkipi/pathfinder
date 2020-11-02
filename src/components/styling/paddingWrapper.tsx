import classNames from "classnames";
import React from "react";
import { OptionalClassName } from "../../interfaces/optionalClassName";
import styles from "./paddingWrapper.module.scss";

export const PaddingWrapper: React.FC<OptionalClassName> = ({
  className,
  children,
}) => {
  return <div className={classNames(className, styles.paddingWrapper)}>{children}</div>;
};
