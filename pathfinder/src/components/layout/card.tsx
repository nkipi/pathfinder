import classNames from "classnames";
import React from "react";
import { OptionalClassName } from "../../interfaces/optionalClassName";
import styles from "./card.module.scss";

export const Card: React.FC<OptionalClassName> = ({ children, className }) => {
  return <div className={classNames(styles.card, className)}>{children}</div>;
};
