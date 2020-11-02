import React from "react";
import zotha from "../../../data/zotha.json";
import { Card } from "../../layout/card";
import { Flex } from "../../layout/flex";
import { Heading } from "../../styling/heading";
import { Property } from "../../styling/property";

export const Feats: React.FC = () => {
  const { feats } = zotha;
  return (
      <Card>
        <Heading>{"Feats"}</Heading>
        <Flex>
          {feats.map((feat) => {
            const { name, notes } = feat;
            return (
              <Card>
                <Property>{name}</Property>
                <p>{notes}</p>
              </Card>
            );
          })}
        </Flex>
      </Card>
  );
};
