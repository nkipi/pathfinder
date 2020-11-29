import React from "react";
import { harrowDeck } from "./getHarrowDeck";
import { Flex } from "../layout/flex";
import styles from "./harrowDeck.module.scss";
import ReactCardFlip from "react-card-flip";
import { Property } from "../styling/property";
import { Drawer } from "@material-ui/core";
import classNames from "classnames";
import { Details } from "./details";

export const GridView: React.FC = () => {
  const cards = harrowDeck.flatMap((deck) =>
    deck.cards.flatMap((card) => {
      return card.name;
    })
  );

  return (
    <Flex className={styles.gridView}>
      {cards.map((name) => {
        return <CardFlip cardName={name} />;
      })}
    </Flex>
  );
};

const CardFlip: React.FC<{ cardName: string }> = ({ cardName }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [showDrawer, setShowDrawer] = React.useState(false);
  const {
    name,
    alignment,
    description,
    keywords,
    misalignments,
  } = harrowDeck.flatMap((deck) => {
    return deck.cards.filter((card) => card.name === cardName);
  })[0];
  return (
    <>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <img
          className={styles.image}
          alt={cardName}
          src={require(`./images/${cardName}.jpg`).default}
          onMouseOver={() => setIsFlipped(true)}
          onMouseOut={() => setIsFlipped(false)}
          onClick={() => setShowDrawer(true)}
        />
        <img
          className={styles.image}
          alt={cardName}
          src={require(`./images/The Back.jpg`).default}
          onMouseOver={() => setIsFlipped(true)}
          onMouseOut={() => setIsFlipped(false)}
          onClick={() => setShowDrawer(true)}
        />
      </ReactCardFlip>
      <Drawer
        open={showDrawer}
        onClose={() => setShowDrawer(false)}
        anchor="right"
      >
        <Details cardName={cardName} className={styles.drawerContent} />
      </Drawer>
    </>
  );
};
