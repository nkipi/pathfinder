import React from "react";
import { SpecialAbility } from "../../../interfaces/specialAbility";
import { Trait } from "../../../interfaces/trait";
import { Card } from "../../layout/card";
import { Flex } from "../../layout/flex";
import { Wrapper } from "../../layout/wrapper";
import { Heading } from "../../styling/heading";
import { Helper } from "../../styling/helper";
import { Link } from "../../styling/link";
import { Property } from "../../styling/property";
import { MainProps } from "../main";

export const SpecialAbilitiesAndTraits: React.FC<MainProps> = ({
  character,
}) => {
  const { specialAbilities, traits } = character;
  return specialAbilities ? (
    <Wrapper id={"specialAbilities"}>
      <Heading>{"Special Abilities & Traits"}</Heading>
      <Flex>
        {specialAbilities.map((ability: SpecialAbility) => {
          const { name, type, link, notes } = ability;
          return (
            <Card key={name}>
              <Property>{name}</Property>
              {notes && <p>{notes}</p>}
              <Helper>{type}</Helper>
              {link && <Link href={link} />}
            </Card>
          );
        })}
        {traits && traits.map((trait: Trait) => {
          const { name, type, notes, link } = trait;
          return (
            <Card key={name}>
              <Property>{name}</Property>
              {notes && <p>{notes}</p>}
              <Helper>{type}</Helper>
              {link && <Link href={link} />}
            </Card>
          );
        })}
      </Flex>
    </Wrapper>
  ) : null;
};
