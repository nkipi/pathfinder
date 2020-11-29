import React from "react";
import { Flex } from "../layout/flex";
import styles from "./harrowDeck.module.scss";
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
    <Flex className={classNames(className, styles.text)}>
      <Property>{alignment}</Property>
      <h3>{name}</h3>
      <p>{description}</p>
      {keywords.map((keyword) => (
        <Tag className={styles.tag}>{keyword}</Tag>
      ))}
      {misalignments.map((misalignment) => (
        <Tag className={styles.misalignment}>{misalignment}</Tag>
      ))}
    </Flex>
  );
};
