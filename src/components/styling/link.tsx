import classNames from "classnames";
import React from "react";
import { OptionalClassName } from "../../interfaces/optionalClassName";
import  "./link.scss";
import { FaExternalLinkAlt } from "react-icons/fa";

interface Props extends OptionalClassName {
  href: string;
}

export const Link: React.FC<Props> = ({ className, href, children }) => {
  return (
    <a target={"_blank"} rel={"noreferrer"} href={href} className={classNames(className, "linkAnchor")}>
      <FaExternalLinkAlt className={"linkIcon"} />
    </a>
  );
};
