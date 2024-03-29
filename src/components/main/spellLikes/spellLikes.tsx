import React from "react";
import { SpellLikes as ISpellLikes } from "../../../interfaces/spellLikes";
import { Card } from "../../layout/card";
import { Flex } from "../../layout/flex";
import { Wrapper } from "../../layout/wrapper";
import { Heading } from "../../styling/heading";
import { Link } from "../../styling/link";
import { PaddingWrapper } from "../../styling/paddingWrapper";
import { Property } from "../../styling/property";
import { MainProps } from "../main";

export const SpellLikes: React.FC<MainProps> = ({ character }) => {
  const { spellLikes } = character;
  return spellLikes ? (
    <Wrapper id={"spellLikes"}>
      <Heading>{"Spell Likes"}</Heading>
      <Flex>
        {spellLikes.map((spellLike: ISpellLikes) => {
          const { name, link } = spellLike;
          return (
            <Card key={name}>
              <PaddingWrapper>
                <Property noMargin={true}>{name}</Property>
                {link && <Link href={link} />}
              </PaddingWrapper>
            </Card>
          );
        })}
      </Flex>
    </Wrapper>
  ) : null;
};
