import React from "react";
import { Flex } from "../layout/flex";
import { Abilities } from "./abilities/abilities";
import { Character } from "./character/character";
import styles from "./main.module.scss";
import { Saves } from "./saves/saves";

export const Main: React.FC = () => {
  return (
    <Flex className={styles.main}>
      <Character />
      <Abilities />
      <Saves />
    </Flex>
  );
};
