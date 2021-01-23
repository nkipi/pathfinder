import classNames from "classnames";
import React from "react";
import { OptionalClassName } from "../../interfaces/optionalClassName";
import  "./paddingWrapper.scss";

export const PaddingWrapper: React.FC<OptionalClassName> = ({
  className,
  children,
}) => {
  return <div className={classNames(className, "paddingWrapper")}>{children}</div>;
};
