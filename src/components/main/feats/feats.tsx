import React from "react";
import { Feat } from "../../../interfaces/feat";
import { Card } from "../../layout/card";
import { Flex } from "../../layout/flex";
import { Heading } from "../../styling/heading";
import { Link } from "../../styling/link";
import { PaddingWrapper } from "../../styling/paddingWrapper";
import { Property } from "../../styling/property";
import { MainProps } from "../main";

export const Feats: React.FC<MainProps> = ({ character }) => {
  const { feats } = character;
  return feats ? (
    <Card id={"feats"}>
      <Heading>{"Feats"}</Heading>
      <Flex>
        {feats.map((feat: Feat) => {
          const { name, link } = feat;
          return (
            <Card key={name}>
              <PaddingWrapper>
                <Property>{name}</Property>
                {link && <Link href={link} />}
              </PaddingWrapper>
            </Card>
          );
        })}
      </Flex>
    </Card>
  ) : null;
};
