import React from "react";
import { Card } from "../../layout/card";
import { Heading } from "../../styling/heading";
import { Property } from "../../styling/property";
import { startCase } from "lodash";
import { Flex } from "../../layout/flex";
import { MainProps } from "../main";

export const Combat: React.FC<MainProps> = ({ character }) => {
  const { combat } = character;
  return combat ? (
    <Card id={"combat"}>
      <Heading>{"Combat"}</Heading>
      <Flex>
        {Object.entries(combat).map(([key, value]) => {
          return (
            <Card key={key}>
              <Property>{startCase(key)}</Property>
              <h1>{value}</h1>
            </Card>
          );
        })}
      </Flex>
    </Card>
  ) : null;
};
