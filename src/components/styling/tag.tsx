import classNames from "classnames";
import React from "react";
import { OptionalClassName } from "../../interfaces/optionalClassName";
import  "./tag.scss";

export const Tag: React.FC<OptionalClassName> = ({
  className,
  children,
}) => {
  return <div className={classNames(className, "tag")}>{children}</div>;
};
