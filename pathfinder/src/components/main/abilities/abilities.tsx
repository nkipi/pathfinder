import React from "react";
import zotha from "../../../data/zotha.json";
import { Card } from "../../layout/card";
import { CenterFlex } from "../../layout/centerFlex";
import { SmallCard } from "../../layout/smallCard";
import { Wrapper } from "../../layout/wrapper";
import { Heading } from "../../styling/heading";
import { Helper } from "../../styling/helper";
import { Property } from "../../styling/property";

export const Abilities: React.FC = () => {
  const { abilities } = zotha;
  return (
    <Wrapper>
      <Card>
        <Heading>{"Abilities"}</Heading>
        <CenterFlex>
          {abilities.map((ability) => {
            const { name, points, mod } = ability;
            return (
              <SmallCard>
                <Property>{name}</Property>
                <h1>{mod}</h1>
                <Helper>{points}</Helper>
              </SmallCard>
            );
          })}
        </CenterFlex>
      </Card>
    </Wrapper>
  );
};
