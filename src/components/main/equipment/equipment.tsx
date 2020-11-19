import React from "react";
import zotha from "../../../data/zotha.json";
import { Card } from "../../layout/card";
import { Flex } from "../../layout/flex";
import { Wrapper } from "../../layout/wrapper";
import { Heading } from "../../styling/heading";
import { Helper } from "../../styling/helper";
import { Link } from "../../styling/link";
import { Property } from "../../styling/property";

export const Equipment: React.FC = () => {
  const { equipment } = zotha;
  return (
    <Wrapper id={"equipment"}>
      <Heading>{"Equipment"}</Heading>
      <Flex>
        {equipment.map((item) => {
          const { name, type, quantity, link, notes } = item;
          return (
            <Card key={name}>
              <Property>{type}</Property>
              <h3>{`${name} (${quantity})`}</h3>
              {notes && <Helper>{notes}</Helper>}
              {link && <Link href={link} />}
            </Card>
          );
        })}
      </Flex>
    </Wrapper>
  );
};
