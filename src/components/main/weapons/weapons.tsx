import React from "react";
import { Weapon } from "../../../interfaces/weapon";
import { Card } from "../../layout/card";
import { Flex } from "../../layout/flex";
import { Wrapper } from "../../layout/wrapper";
import { Heading } from "../../styling/heading";
import { Helper } from "../../styling/helper";
import { Property } from "../../styling/property";
import { MainProps } from "../main";

export const Weapons: React.FC<MainProps> = ({ character }) => {
  const { weapons } = character;
  return weapons ? (
    <Wrapper id={"weapons"}>
      <Heading>{"Weapons"}</Heading>
      <Flex>
        {weapons.map((weapon: Weapon) => {
          const { name, attackBonus, damage, critical, type, notes } = weapon;
          return (
            <Card key={name}>
              <Property>{name}</Property>
              {attackBonus && <h4>{`Attack: ${attackBonus}`}</h4>}
              {damage && <h4>{`Damage: ${damage}`}</h4>}
              {critical && <Helper>{`Critical (${critical})`}</Helper>}
              {type && <Helper>{`Type (${type})`}</Helper>}
              {notes && <Helper>{`${notes}`}</Helper>}
            </Card>
          );
        })}
      </Flex>
    </Wrapper>
  ) : null;
};
