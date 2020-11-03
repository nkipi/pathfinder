import React from "react";
import zotha from "../../../data/zotha.json";
import { Card } from "../../layout/card";
import { Flex } from "../../layout/flex";
import { Heading } from "../../styling/heading";
import { Helper } from "../../styling/helper";
import { Property } from "../../styling/property";

export const SpecialAbilitiesAndTraits: React.FC = () => {
  const { specialAbilities, traits } = zotha;
  return (
      <Card id={"specialAbilities"}>
        <Heading>{"Special Abilities & Traits"}</Heading>
        <Flex>
          {specialAbilities.map((ability) => {
            const { name, type } = ability;
            return (
              <Card>
                <Property>{name}</Property>
                <Helper>{type}</Helper>
              </Card>
            );
          })}
           {traits.map((trait) => {
            const { name, type } = trait;
            return (
              <Card>
                <Property>{name}</Property>
                <Helper>{type}</Helper>
              </Card>
            );
          })}
        </Flex>
      </Card>
  );
};
