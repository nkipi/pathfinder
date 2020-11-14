import React from "react";
import zotha from "../../../data/zotha.json";
import { Card } from "../../layout/card";
import { Flex } from "../../layout/flex";
import { Heading } from "../../styling/heading";
import { Link } from "../../styling/link";
import { PaddingWrapper } from "../../styling/paddingWrapper";
import { Property } from "../../styling/property";

export const SpellLikes: React.FC = () => {
  const { spellLikes } = zotha;
  return (
    <Card id={"spellLikes"}>
      <Heading>{"Spell Likes"}</Heading>
      <Flex>
        {spellLikes.map((spellLike) => {
          const { name, link } = spellLike;
          return (
            <Card key={name}>
              <PaddingWrapper>
                <Property>{name}</Property>
                <Link href={link} />
              </PaddingWrapper>
            </Card>
          );
        })}
      </Flex>
    </Card>
  );
};
