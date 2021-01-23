import React from "react";
import { Save } from "../../../interfaces/save";
import { Card } from "../../layout/card";
import { Flex } from "../../layout/flex";
import { Heading } from "../../styling/heading";
import { Helper } from "../../styling/helper";
import { Property } from "../../styling/property";
import { MainProps } from "../main";

export const Saves: React.FC<MainProps> = ({ character }) => {
  const { saves } = character;
  return saves ? (
    <Card id={"saves"}>
      <Heading>{"Saves"}</Heading>
      <Flex>
        {saves.map((save: Save) => {
          const { name, ability, total } = save;
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
