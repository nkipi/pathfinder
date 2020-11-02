import React from "react";
import { Abilities } from "./abilities/abilities";
import { Character } from "./character/character";
import styles from "./main.module.scss";
import { Combat } from "./combat/combat";
import { Saves } from "./saves/saves";
import Masonry from "react-masonry-css";

export const Main: React.FC = () => {
  return (
    <div className={styles.main}>
      <Masonry
        className={styles.masonry}
        columnClassName={styles.card}
        breakpointCols={3}
      >
        <Character />
        <Abilities />
        <Saves />
        <Combat />
      </Masonry>
    </div>
  );
};
