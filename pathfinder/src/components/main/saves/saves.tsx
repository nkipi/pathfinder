import React from "react";
import zotha from "../../../data/zotha.json";
import { Card } from "../../layout/card";
import { CenterFlex } from "../../layout/centerFlex";
import { SmallCard } from "../../layout/smallCard";
import { Wrapper } from "../../layout/wrapper";
import { Heading } from "../../styling/heading";
import { Helper } from "../../styling/helper";
import { Property } from "../../styling/property";

export const Saves: React.FC = () => {
  const { saves } = zotha;
  return (
    <Wrapper>
      <Card>
        <Heading>{"Saves"}</Heading>
        <CenterFlex>
          {saves.map((save) => {
            const { name, ability, total } = save;
            return (

              
              <SmallCard>
                <Property>{name}</Property>
                <h1>{total}</h1>
                <Helper>{ability}</Helper>
              </SmallCard>
            );
          })}
        </CenterFlex>
      </Card>
    </Wrapper>
  );
};
