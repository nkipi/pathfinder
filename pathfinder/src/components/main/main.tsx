import React from "react";
import { Abilities } from "./abilities/abilities";
import { Character } from "./character/character";
import styles from "./main.module.scss";
import masonryStyles from "./masonry.module.scss";
import { Combat } from "./combat/combat";
import { Saves } from "./saves/saves";
import Masonry from "react-masonry-css";
import { AllSpells } from "./spells/allSpells";

const breakpointColumnsObj = {
  default: 3,
  1000: 2,
  700: 1,
};

export const Main: React.FC = () => {
  return (
    <div className={styles.main}>
      <Masonry
        className={masonryStyles.masonry}
        columnClassName={masonryStyles.card}
        breakpointCols={breakpointColumnsObj}
      >
        <Character />
        <Abilities />
        <Saves />
        <Combat />
      </Masonry>
      <AllSpells />
    </div>
  );
};
