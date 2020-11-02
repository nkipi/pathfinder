import React from "react";
import zotha from "../../../data/zotha.json";
import { Card } from "../../layout/card";
import { Flex } from "../../layout/flex";
import { Heading } from "../../styling/heading";
import { Link } from "../../styling/link";
import { PaddingWrapper } from "../../styling/paddingWrapper";
import { Property } from "../../styling/property";

export const Feats: React.FC = () => {
  const { feats } = zotha;
  return (
    <Card>
      <Heading>{"Feats"}</Heading>
      <Flex>
        {feats.map((feat) => {
          const { name, link } = feat;
          return (
            <Card>
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
