import classNames from "classnames";
import React from "react";
import { OptionalClassName } from "../../interfaces/optionalClassName";
import styles from "./heading.module.scss";

export const Heading: React.FC<OptionalClassName> = ({
  className,
  children,
}) => {
  return <h1 className={classNames(className, styles.heading)}>{children}</h1>;
};
