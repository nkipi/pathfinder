import React from "react";
import zotha from "../../../data/zotha.json";
import { Card } from "../../layout/card";
import { Flex } from "../../layout/flex";
import { Heading } from "../../styling/heading";
import { Property } from "../../styling/property";

export const Languages: React.FC = () => {
  const { languages } = zotha;
  return (
    <Card id={"languages"}>
      <Heading>{"Languages"}</Heading>
      <Flex>
        {languages.map((language) => {
          return (
            <Card key={language}>
              <Property>{language}</Property>
            </Card>
          );
        })}
      </Flex>
    </Card>
  );
};
