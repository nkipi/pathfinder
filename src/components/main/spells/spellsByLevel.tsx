import React from "react";
import { Spell, SpellInfo } from "../../../interfaces/spell";
import { Card } from "../../layout/card";
import { Flex } from "../../layout/flex";
import { Heading } from "../../styling/heading";
import { Helper } from "../../styling/helper";
import { Link } from "../../styling/link";
import { PaddingWrapper } from "../../styling/paddingWrapper";
import { Property } from "../../styling/property";
import styles from "./spells.module.scss";

interface Props {
  spellInfo: SpellInfo;
  spells: Spell[];
}

export const SpellsByLevel: React.FC<Props> = ({ spellInfo, spells }) => {
  return (
    <div className={styles.wrapper}>
      <h6>{`${spellInfo.slots} SLOTS`}</h6>
      <Heading>{`Spells ${spellInfo.level}`}</Heading>
      <Flex className={styles.smallCard}>
        <Property>{"DC"}</Property>
        <h1>{spellInfo.dc}</h1>
      </Flex>
      <Flex>
        {spells.map((spell) => {
          const { name, school, link } = spell;
          return (
            <Card>
              <PaddingWrapper>
                <Property>{name}</Property>
                <Helper>{school}</Helper>
                {link && <Link href={link} />}
              </PaddingWrapper>
            </Card>
          );
        })}
      </Flex>
    </div>
  );
};
