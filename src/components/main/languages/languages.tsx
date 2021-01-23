import React from "react";
import { Card } from "../../layout/card";
import { Flex } from "../../layout/flex";
import { Heading } from "../../styling/heading";
import { Property } from "../../styling/property";
import { MainProps } from "../main";

export const Languages: React.FC<MainProps> = ({ character }) => {
  const { languages } = character;
  return languages ? (
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
  ) : null;
};
