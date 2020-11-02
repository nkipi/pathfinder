import React from "react";
import zotha from "../../../data/zotha.json";
import { Card } from "../../layout/card";
import { Flex } from "../../layout/flex";
import styles from "./character.module.scss";
import zothaPortrait from "../../../images/zotha.jpg";

export const Character: React.FC = () => {
  const { name, characterClass, level, race, alignment } = zotha.character;
  return (
      <Card>
        <Flex>
          <img src={zothaPortrait} alt={"zotha"} className={styles.portrait} />
          <h1>{name}</h1>
          <Flex>
            <h3>{characterClass}</h3>
            <h3>{level}</h3>
          </Flex>
          <Flex>
            <p>{race}</p>
            <p>{alignment}</p>
          </Flex>
        </Flex>
      </Card>
  );
};
