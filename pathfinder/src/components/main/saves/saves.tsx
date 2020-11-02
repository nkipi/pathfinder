import React from "react";
import zotha from "../../../data/zotha.json";
import { Card } from "../../layout/card";
import { Flex } from "../../layout/flex";
import { SmallCard } from "../../layout/smallCard";
import { Heading } from "../../styling/heading";
import { Helper } from "../../styling/helper";
import { Property } from "../../styling/property";

export const Saves: React.FC = () => {
  const { saves } = zotha;
  return (
      <Card>
        <Heading>{"Saves"}</Heading>
        <Flex>
          {saves.map((save) => {
            const { name, ability, total } = save;
            return (

              
              <SmallCard>
                <Property>{name}</Property>
                <h1>{total}</h1>
                <Helper>{ability}</Helper>
              </SmallCard>
            );
          })}
        </Flex>
      </Card>
  );
};
