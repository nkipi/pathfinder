import React from "react";
import { SpecialAbility } from "../../../interfaces/specialAbility";
import { Trait } from "../../../interfaces/trait";
import { Card } from "../../layout/card";
import { Flex } from "../../layout/flex";
import { Heading } from "../../styling/heading";
import { Helper } from "../../styling/helper";
import { Property } from "../../styling/property";
import { MainProps } from "../main";

export const SpecialAbilitiesAndTraits: React.FC<MainProps> = ({
  character,
}) => {
  const { specialAbilities, traits } = character;
  return specialAbilities ? (
    <Card id={"specialAbilities"}>
      <Heading>{"Special Abilities & Traits"}</Heading>
      <Flex>
        {specialAbilities.map((ability: SpecialAbility) => {
          const { name, type } = ability;
          return (
            <Card key={name}>
              <Property>{name}</Property>
              <Helper>{type}</Helper>
            </Card>
          );
        })}
        {traits && traits.map((trait: Trait) => {
          const { name, type } = trait;
          return (
            <Card key={name}>
              <Property>{name}</Property>
              <Helper>{type}</Helper>
            </Card>
          );
        })}
      </Flex>
    </Card>
  ) : null;
};
