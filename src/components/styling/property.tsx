import classNames from "classnames";
import React from "react";
import { OptionalClassName } from "../../interfaces/optionalClassName";
import  "./property.scss";

export const Property: React.FC<OptionalClassName> = ({
  className,
  children,
}) => {
  return <p className={classNames(className, "property")}>{children}</p>;
};
