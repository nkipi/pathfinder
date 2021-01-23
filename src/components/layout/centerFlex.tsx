import classNames from "classnames";
import React from "react";
import { OptionalClassName } from "../../interfaces/optionalClassName";
import { Flex } from "./flex";
import "./centerFlex.scss";

export const CenterFlex: React.FC<OptionalClassName> = ({
  className,
  children,
}) => {
  return (
    <Flex className={classNames(className, "centerFlex")}>{children}</Flex>
  );
};
