import React from "react";
import zotha from "../../../data/zotha.json";
import { Card } from "../../layout/card";
import { Flex } from "../../layout/flex";
import { Heading } from "../../styling/heading";
import { Helper } from "../../styling/helper";
import { Property } from "../../styling/property";

export const Equipment: React.FC = () => {
  const { equipment } = zotha;
  return (
    <Card>
      <Heading>{"Equipment"}</Heading>
      <Flex>
        {equipment.map((item) => {
          const { name, type, quantity, school } = item;
          return (
            <Card>
              <Property>{type}</Property>
              <h3>{name}</h3>
              <h4>{`(${quantity})`}</h4>
              <Helper>{school}</Helper>
            </Card>
          );
        })}
      </Flex>
    </Card>
  );
};
