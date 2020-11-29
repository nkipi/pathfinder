import React from "react";
import { Flex } from "../layout/flex";
import styles from "./harrowDeck.module.scss";
import ReactCardFlip from "react-card-flip";
import { Drawer } from "@material-ui/core";
import { Details } from "./details";

export const GridView: React.FC<{ cards: string[] }> = ({ cards }) => {
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
