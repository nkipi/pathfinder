import React from "react";
import { Equipment as IEquipment } from "../../../interfaces/equipment";
import { Card } from "../../layout/card";
import { Flex } from "../../layout/flex";
import { Wrapper } from "../../layout/wrapper";
import { Heading } from "../../styling/heading";
import { Helper } from "../../styling/helper";
import { Link } from "../../styling/link";
import { Property } from "../../styling/property";
import { MainProps } from "../main";

export const Equipment: React.FC<MainProps> = ({ character }) => {
  const { equipment } = character;
  return equipment ? (
    <Wrapper id={"equipment"}>
      <Heading>{"Equipment"}</Heading>
      <Flex>
        {equipment.map((item: IEquipment) => {
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
  ) : null;
};
