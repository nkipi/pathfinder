import classNames from "classnames";
import React from "react";
import { OptionalClassName } from "../../interfaces/optionalClassName";
import styles from "./wrapper.module.scss";

export const Wrapper: React.FC<OptionalClassName> = ({
  className,
  children,
}) => {
  return (
    <div className={classNames(className, styles.wrapper)}>{children}</div>
  );
};
