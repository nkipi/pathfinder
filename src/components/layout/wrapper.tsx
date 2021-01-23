import classNames from "classnames";
import React from "react";
import { OptionalClassName } from "../../interfaces/optionalClassName";
import "./wrapper.scss";

interface Props extends OptionalClassName {
  id?: string;
}

export const Wrapper: React.FC<Props> = ({
  id,
  className,
  children,
}) => {
  return (
    <div id={id} className={classNames(className, "wrapper")}>{children}</div>
  );
};
