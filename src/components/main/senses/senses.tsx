import React from "react";
import { Card } from "../../layout/card";
import { Flex } from "../../layout/flex";
import { Heading } from "../../styling/heading";
import { Helper } from "../../styling/helper";
import { Property } from "../../styling/property";
import { MainProps } from "../main";

export const Senses: React.FC<MainProps> = ({ character }) => {
  const { senses } = character;
  return senses ? (
    <Card id={"senses"}>
      <Heading>{"Senses"}</Heading>
      <Flex>
        {senses.map((sense) => {
          const { name, ability, total } = sense;
          return (
            <Card key={name}>
              <Property>{name}</Property>
              <h1>{total}</h1>
              <Helper>{ability}</Helper>
            </Card>
          );
        })}
      </Flex>
    </Card>
  ) : null;
};
