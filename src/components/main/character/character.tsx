import React from "react";
import zotha from "../../../data/zotha.json";
import { Card } from "../../layout/card";
import { Flex } from "../../layout/flex";
import styles from "./character.module.scss";
import zothaPortrait from "../../../images/zotha.jpg";
import { Helper } from "../../styling/helper";
import { Property } from "../../styling/property";
import { Heading } from "../../styling/heading";

export const Character: React.FC = () => {
  const { name, characterClass, level, race, alignment } = zotha.character;
  return (
    <Card className={styles.card}>
      <Flex className={styles.flex}>
        <img src={zothaPortrait} alt={"zotha"} className={styles.portrait} />
        <Heading>{name}</Heading>
        <Flex>
          <Property>{characterClass}</Property>
          <Property>{level}</Property>
        </Flex>
        <Flex>
          <Helper>{race}</Helper>
          <Helper>{alignment}</Helper>
        </Flex>
      </Flex>
    </Card>
  );
};
