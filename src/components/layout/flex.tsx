import classNames from "classnames";
import React from "react";
import { OptionalClassName } from "../../interfaces/optionalClassName";
import "./flex.scss";

export const Flex: React.FC<OptionalClassName> = ({ children, className }) => {
  return <div className={classNames("flex", className)}>{children}</div>;
};
