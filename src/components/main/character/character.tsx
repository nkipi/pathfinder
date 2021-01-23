import React from "react";
import { Card } from "../../layout/card";
import { Flex } from "../../layout/flex";
import "./character.scss";
import { Helper } from "../../styling/helper";
import { Property } from "../../styling/property";
import { Heading } from "../../styling/heading";
import { MainProps } from "../main";

export const Character: React.FC<MainProps> = ({ character, portrait}) => {
  const { name, characterClass, level, race, alignment } = character.character;
  return (
    <Card className={"charCard"}>
      <Flex className={"charFlex"}>
        <img src={portrait} alt={"character"} className={"charPortrait"} />
        <Heading>{name}</Heading>
        <Flex className={"charSubheading"}>
          <Property>{`${characterClass}`}</Property>
          <Property>{`Level ${level}`}</Property>
        </Flex>
        <Flex className={"charSubheading"}>
          <Helper>{`${race}`}</Helper>
          <Helper>{`${alignment}`}</Helper>
        </Flex>
      </Flex>
    </Card>
  );
};
