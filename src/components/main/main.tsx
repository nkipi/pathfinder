import React from "react";
import { Abilities } from "./abilities/abilities";
import { Archetype } from "./archetype/archetype";
import { Character } from "./character/character";
import "./main.scss";
import masonryStyles from "../../styles/masonry.module.scss";
import { Combat } from "./combat/combat";
import { Saves } from "./saves/saves";
import { Senses } from "./senses/senses";
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
import { Header } from "../header/header";
import { Theme } from "@material-ui/core";
import { FullCharacter } from "../../interfaces/fullCharacter";

const breakpointColumnsObj = {
  default: 3,
  1000: 2,
  700: 1,
};

export interface MainProps {
  character: FullCharacter;
  portrait?: string;
}

export interface ThemeProps {
  theme: Theme;
  className: string;
}

export const Main: React.FC<MainProps & ThemeProps> = ({
  character,
  portrait,
  className,
}) => {
  return (
    <div className={className}>
      <div className={"theme"}>
        <div className={"main"}>
          <Header character={character} />
          <Masonry
            id={"character"}
            className={masonryStyles.masonry}
            columnClassName={masonryStyles.card}
            breakpointCols={breakpointColumnsObj}
          >
            <Character character={character} portrait={portrait} />
            <Abilities character={character} />
            <Combat character={character} />
            <Saves character={character} />
            <Senses character={character} />
            <DailyBonuses character={character} />
            <Archetype character={character} />
            <SpellLikes character={character} />
            <SpecialAbilitiesAndTraits character={character} />
            <Feats character={character} />
            <Languages character={character} />
          </Masonry>
          <Weapons character={character} />
          <AllSpells character={character} />
          <Skills character={character} />
          <Equipment character={character} />
        </div>
      </div>
    </div>
  );
};
