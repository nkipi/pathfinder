import classNames from "classnames";
import React from "react";
import styles from "./card.module.scss";

interface Props {
  className?: string;
}

export const Card: React.FC<Props> = ({ children, className }) => {
  return <div className={classNames(styles.card, className)}>{children}</div>;
};
