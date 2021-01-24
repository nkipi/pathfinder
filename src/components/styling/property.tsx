import classNames from "classnames";
import React from "react";
import { OptionalClassName } from "../../interfaces/optionalClassName";
import "./property.scss";

export const Property: React.FC<OptionalClassName & { noMargin?: boolean }> = ({
  className,
  children,
  noMargin,
}) => {
  return (
    <p
      className={classNames(className, "property", noMargin ? "noMargin" : "")}
    >
      {children}
    </p>
  );
};
