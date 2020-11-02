import classNames from "classnames";
import React from "react";
import { OptionalClassName } from "../../interfaces/optionalClassName";
import styles from "./property.module.scss";

export const Property: React.FC<OptionalClassName> = ({
  className,
  children,
}) => {
  return <p className={classNames(className, styles.property)}>{children}</p>;
};
