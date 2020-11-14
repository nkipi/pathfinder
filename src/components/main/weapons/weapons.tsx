import React from "react";
import zotha from "../../../data/zotha.json";
import { Card } from "../../layout/card";
import { Flex } from "../../layout/flex";
import { Wrapper } from "../../layout/wrapper";
import { Heading } from "../../styling/heading";
import { Helper } from "../../styling/helper";
import { Property } from "../../styling/property";

export const Weapons: React.FC = () => {
  const { weapons } = zotha;
  return (
    <Wrapper id={"weapons"}>
      <Heading>{"Weapons"}</Heading>
      <Flex>
        {weapons.map((weapon) => {
          const { name, attackBonus, damage, critical, type, notes } = weapon;
          return (
            <Card key={name}>
              <Property>{name}</Property>
              <h4>{`Attack: ${attackBonus}`}</h4>
              <h4>{`Damage: ${damage}`}</h4>
              <Helper>{`Critical (${critical}), ${type}, ${notes}`}</Helper>
            </Card>
          );
        })}
      </Flex>
    </Wrapper>
  );
};
