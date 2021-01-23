import React from "react";
import { Flex } from "../layout/flex";
import "./harrowDeck.scss";
import { Property } from "../styling/property";
import classNames from "classnames";
import { Tag } from "../styling/tag";
import { getCardInfo } from "./getCards";

export const Details: React.FC<{ cardName: string; className?: string }> = ({
  cardName,
  className,
}) => {
  const { name, alignment, description, keywords, misalignments } = getCardInfo(
    cardName
  );
  return (
    <Flex className={classNames(className, "harrowText")}>
      <Property>{alignment}</Property>
      <h3>{name}</h3>
      <p>{description}</p>
      {keywords.map((keyword) => (
        <Tag className={"harrowTag"}>{keyword}</Tag>
      ))}
      {misalignments.map((misalignment) => (
        <Tag className={"harrowMisalignment"}>{misalignment}</Tag>
      ))}
    </Flex>
  );
};
