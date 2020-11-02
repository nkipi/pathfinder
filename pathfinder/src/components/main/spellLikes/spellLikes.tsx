import React from "react";
import zotha from "../../../data/zotha.json";
import { Card } from "../../layout/card";
import { Flex } from "../../layout/flex";
import { Heading } from "../../styling/heading";
import { Property } from "../../styling/property";

export const SpellLikes: React.FC = () => {
  const { spellLikes } = zotha;
  return (
    <Card>
      <Heading>{"Spell Likes"}</Heading>
      <Flex>
        {spellLikes.map((spellLike) => {
          const { name } = spellLike;
          return (
            <Card>
              <Property>{name}</Property>
            </Card>
          );
        })}
      </Flex>
    </Card>
  );
};
