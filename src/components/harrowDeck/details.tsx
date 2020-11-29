import React from "react";
import { harrowDeck } from "./getHarrowDeck";
import { Flex } from "../layout/flex";
import styles from "./harrowDeck.module.scss";
import { Property } from "../styling/property";
import classNames from "classnames";
import { Tag } from "../styling/tag";

export const Details: React.FC<{ cardName: string, className?: string }> = ({ cardName, className }) => {
  const {
    name,
    alignment,
    description,
    keywords,
    misalignments,
  } = harrowDeck.flatMap((deck) => {
    return deck.cards.filter((card) => card.name === cardName);
  })[0];
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
