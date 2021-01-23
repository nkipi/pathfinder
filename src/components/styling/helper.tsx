import classNames from "classnames";
import React from "react";
import { OptionalClassName } from "../../interfaces/optionalClassName";
import  "./helper.scss";

export const Helper: React.FC<OptionalClassName> = ({
  className,
  children,
}) => {
  return <p className={classNames(className, "helper")}>{children}</p>;
};
