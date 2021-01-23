import classNames from "classnames";
import React from "react";
import { OptionalClassName } from "../../interfaces/optionalClassName";
import "./card.scss";

interface Props extends OptionalClassName {
  id?: string;
}

export const Card: React.FC<Props> = ({ id, children, className }) => {
  return <div id={id} className={classNames("card", className)}>{children}</div>;
};
