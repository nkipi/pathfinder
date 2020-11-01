import classNames from "classnames";
import React from "react";
import styles from "./flex.module.scss";

interface Props {
  className?: string;
}

export const Flex: React.FC<Props> = ({ children, className }) => {
  return <div className={classNames(styles.flex, className)}>{children}</div>;
};
