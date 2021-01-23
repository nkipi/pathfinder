import classNames from "classnames";
import React from "react";
import { OptionalClassName } from "../../interfaces/optionalClassName";
import  "./heading.scss";

export const Heading: React.FC<OptionalClassName> = ({
  className,
  children,
}) => {
  return <h1 className={classNames(className, "heading")}>{children}</h1>;
};
