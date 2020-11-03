import React from "react";
import { Card } from "../../layout/card";
import { Heading } from "../../styling/heading";
import { SpellsByLevel } from "./spellsByLevel";
import Masonry from "react-masonry-css";
import zotha from "../../../data/zotha.json";
import masonryStyles from "../masonry.module.scss";
import { Wrapper } from "../../layout/wrapper";

const breakpointColumnsObj = {
  default: 3,
  1000: 2,
  700: 1,
};

export const AllSpells: React.FC = () => {
  return (
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
  );

  function renderSpells() {
    const { spellInfo, spells } = zotha;

    return spellInfo.map((info, index) => {
      return (
        <Card>
          <SpellsByLevel
            spellInfo={info}
            spells={spells.filter(
              (spell) => spell.level === `${index.toString()}`
            )}
          />
        </Card>
      );
    });
  }
};
