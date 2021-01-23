import React from "react";
import { Card } from "../../layout/card";
import { Heading } from "../../styling/heading";
import { SpellsByLevel } from "./spellsByLevel";
import Masonry from "react-masonry-css";
import masonryStyles from "../../../styles/masonry.module.scss";
import { Wrapper } from "../../layout/wrapper";
import { MainProps } from "../main";

const breakpointColumnsObj = {
  default: 3,
  1000: 2,
  700: 1,
};

export const AllSpells: React.FC<MainProps> = ({character}) => {
  const { spells } = character;

  return spells ? (
    <Wrapper id={"spells"}>
    <Heading>{"Spells"}</Heading>
      <Masonry
        className={masonryStyles.masonry}
        columnClassName={masonryStyles.card}
        breakpointCols={breakpointColumnsObj}
      >
        {renderSpells()}
      </Masonry>
    </Wrapper>
  ) : null;

  function renderSpells() {
    const { spellInfo, spells } = character;

    return spellInfo ? spellInfo.map((info, index) => {
      return (
        <Card key={`spellInfo_${index}`}>
          <SpellsByLevel
            spellInfo={info}
            spells={spells.filter(
              (spell) => spell.level === `${index.toString()}`
            )}
          />
        </Card>
      );
    }) : null;
  }
};
