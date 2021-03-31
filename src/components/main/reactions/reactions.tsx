import React from "react";
import { Generic } from "../../../interfaces/generic";
import { Card } from "../../layout/card";
import { Flex } from "../../layout/flex";
import { Heading } from "../../styling/heading";
import { Helper } from "../../styling/helper";
import { Link } from "../../styling/link";
import { PaddingWrapper } from "../../styling/paddingWrapper";
import { Property } from "../../styling/property";
import { MainProps } from "../main";

export const Reactions: React.FC<MainProps> = ({ character }) => {
  const { reactions } = character;
  return reactions ? (
    <Card id={"reactions"}>
      <Heading>{"Reactions"}</Heading>
      <Flex>
        {reactions.map((reaction: Generic) => {
          const { source, name, bonuses, link } = reaction;
          return (
            <Card key={name}>
              <PaddingWrapper>
                <Property>{name}</Property>
                {bonuses &&
                  bonuses.map((bonus: string) => {
                    return <p key={bonus}>{bonus}</p>;
                  })}
                <Helper>{source}</Helper>
                {link && <Link href={link} />}
              </PaddingWrapper>
            </Card>
          );
        })}
      </Flex>
    </Card>
  ) : null;
};
