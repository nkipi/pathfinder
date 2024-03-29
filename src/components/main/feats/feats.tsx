import React from "react";
import { Feat } from "../../../interfaces/feat";
import { Card } from "../../layout/card";
import { Flex } from "../../layout/flex";
import { Wrapper } from "../../layout/wrapper";
import { Heading } from "../../styling/heading";
import { Link } from "../../styling/link";
import { PaddingWrapper } from "../../styling/paddingWrapper";
import { Property } from "../../styling/property";
import { MainProps } from "../main";

export const Feats: React.FC<MainProps> = ({ character }) => {
  const { feats } = character;
  return feats ? (
    <Wrapper id={"feats"}>
      <Heading>{"Feats"}</Heading>
      <Flex>
        {feats.map((feat: Feat) => {
          const { name, link } = feat;
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
