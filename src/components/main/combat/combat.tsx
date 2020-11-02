import React from "react";
import zotha from "../../../data/zotha.json";
import { Card } from "../../layout/card";
import { Heading } from "../../styling/heading";
import { Property } from "../../styling/property";
import { startCase } from "lodash";
import { Flex } from "../../layout/flex";

export const Combat: React.FC = () => {
  const { combat } = zotha;
  return (
    <Card>
      <Heading>{"Combat"}</Heading>
      <Flex>
        {Object.entries(combat).map(([key, value]) => {
          return (
            <Card>
              <Property>{startCase(key)}</Property>
              <h1>{value}</h1>
            </Card>
          );
        })}
      </Flex>
    </Card>
  );
};
