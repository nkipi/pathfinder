import React from "react";
import { Flex } from "../layout/flex";
import "./harrowDeck.scss";
import ReactCardFlip from "react-card-flip";
import { Drawer } from "@material-ui/core";
import { Details } from "./details";

export const GridView: React.FC<{ cards: string[] }> = ({ cards }) => {
  return (
    <Flex className={"harrowGridView"}>
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
          className={"harrowGridImg"}
          alt={cardName}
          src={require(`./images/${cardName}.jpg`).default}
          onMouseOver={() => setIsFlipped(true)}
          onMouseOut={() => setIsFlipped(false)}
          onClick={() => setShowDrawer(true)}
        />
        <img
          className={"harrowGridImg"}
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
        disablePortal={true}
      >
        <Details cardName={cardName} className={"harrowDrawer"} />
      </Drawer>
    </>
  );
};
