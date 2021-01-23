import React from "react";
import { Card } from "../../layout/card";
import { Flex } from "../../layout/flex";
import { Heading } from "../../styling/heading";
import { Helper } from "../../styling/helper";
import { Property } from "../../styling/property";
import { MainProps } from "../main";

export const Abilities: React.FC<MainProps> = ({ character }) => {
  const { abilities } = character;
  return abilities ? (
    <Card id={"abilities"}>
      <Heading>{"Abilities"}</Heading>
      <Flex>
        {abilities.map((ability) => {
          const { name, points, mod } = ability;
          return (
            <Card key={name}>
              <Property>{name}</Property>
              <h1>{mod}</h1>
              <Helper>{points}</Helper>
            </Card>
          );
        })}
      </Flex>
    </Card>
  ): null;
};
