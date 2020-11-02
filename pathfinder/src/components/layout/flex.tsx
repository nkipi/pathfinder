import classNames from "classnames";
import React from "react";
import { OptionalClassName } from "../../interfaces/optionalClassName";
import styles from "./flex.module.scss";

export const Flex: React.FC<OptionalClassName> = ({ children, className }) => {
  return <div className={classNames(styles.flex, className)}>{children}</div>;
};
