import React from "react";
import zotha from "../../../data/zotha.json";
import { Card } from "../../layout/card";
import { Flex } from "../../layout/flex";
import { Heading } from "../../styling/heading";
import { Helper } from "../../styling/helper";
import { Link } from "../../styling/link";
import { PaddingWrapper } from "../../styling/paddingWrapper";
import { Property } from "../../styling/property";

export const DailyBonuses: React.FC = () => {
  const { dailyBonuses } = zotha;
  return (
    <Card>
      <Heading>{"Daily Bonuses"}</Heading>
      <Flex>
        {dailyBonuses.map((dailyBonus) => {
          const { source, name, bonuses, link } = dailyBonus;
          return (
            <Card>
              <PaddingWrapper>
                <Property>{name}</Property>
                {bonuses.map((bonus) => {
                  return <p>{bonus}</p>;
                })}
                <Helper>{source}</Helper>
                {link && <Link href={link} />}
              </PaddingWrapper>
            </Card>
          );
        })}
      </Flex>
    </Card>
  );
};
