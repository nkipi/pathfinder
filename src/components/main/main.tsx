import React from "react";
import { Abilities } from "./abilities/abilities";
import { Character } from "./character/character";
import styles from "./main.module.scss";
import masonryStyles from "../../styles/masonry.module.scss";
import { Combat } from "./combat/combat";
import { Saves } from "./saves/saves";
import Masonry from "react-masonry-css";
import { AllSpells } from "./spells/allSpells";
import { SpecialAbilitiesAndTraits } from "./specialAbilities/specialAbilities";
import { Feats } from "./feats/feats";
import { SpellLikes } from "./spellLikes/spellLikes";
import { Languages } from "./languages/languages";
import { Equipment } from "./equipment/equipment";
import { Weapons } from "./weapons/weapons";
import { Skills } from "./skills/skills";
import { DailyBonuses } from "./dailyBonuses/dailyBonuses";
import { StickyNotes } from "../stickyNotes/stickyNotes";

const breakpointColumnsObj = {
  default: 3,
  1000: 2,
  700: 1,
};

export const Main: React.FC = () => {
  return (
    <div className={styles.main}>
      <Masonry
        id={"character"}
        className={masonryStyles.masonry}
        columnClassName={masonryStyles.card}
        breakpointCols={breakpointColumnsObj}
      >
        <Character />
        <Abilities />
        <Saves />
        <DailyBonuses/>
        <Combat />
        <SpellLikes />
        <Languages />
        <></>
        <SpecialAbilitiesAndTraits />
        <></>
        <></>
        <Feats />
      </Masonry>
      <Weapons/>
      <AllSpells />
      <Skills/>
      <Equipment/>
      <StickyNotes />
    </div>
  );
};
