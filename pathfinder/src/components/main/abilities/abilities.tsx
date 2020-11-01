import React from "react";
import zotha from "../../../data/zotha.json";
import { Card } from "../../layout/card";
import { Flex } from "../../layout/flex";
import styles from "./abilities.module.scss";

export const Abilities: React.FC = () => {
  const { abilities } = zotha;
  return (
    <Card className={styles.wrapper}>
      <h1>{"Abilities"}</h1>
      <Flex className={styles.abilities}>
        {abilities.map((ability) => {
          const { name, points, mod } = ability;
          return (
            <Card>
              <Flex className={styles.ability}>
                <p>{name}</p>
                <h2>{mod}</h2>
                <p>{points}</p>
              </Flex>
            </Card>
          );
        })}
      </Flex>
    </Card>
  );
};
