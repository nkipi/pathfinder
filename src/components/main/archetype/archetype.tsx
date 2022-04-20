import React from "react";
import { Generic } from "../../../interfaces/generic";
import { Card } from "../../layout/card";
import { Flex } from "../../layout/flex";
import { Wrapper } from "../../layout/wrapper";
import { Heading } from "../../styling/heading";
import { Helper } from "../../styling/helper";
import { Link } from "../../styling/link";
import { PaddingWrapper } from "../../styling/paddingWrapper";
import { Property } from "../../styling/property";
import { MainProps } from "../main";

export const Archetype: React.FC<MainProps> = ({ character }) => {
  const { archetype } = character;
  return archetype ? (
    <Wrapper id={"archetype"}>
      <Heading>{"Archetype"}</Heading>
      <Flex>
        {archetype.map((bonus: Generic) => {
          const { source, name, bonuses, link } = bonus;
          return (
            <Card key={name}>
              <PaddingWrapper>
                <Property>{name}</Property>
                {bonuses.map((bonus: string) => {
                  return <p key={bonus}>{bonus}</p>;
                })}
                <Helper>{source}</Helper>
                {link && <Link href={link} />}
              </PaddingWrapper>
            </Card>
          );
        })}
      </Flex>
    </Wrapper>
  ) : null;
};
