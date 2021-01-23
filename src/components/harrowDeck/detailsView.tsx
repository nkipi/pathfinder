import React from "react";
import { harrowDeck } from "./getHarrowDeck";
import { Card } from "../layout/card";
import { Flex } from "../layout/flex";
import { Property } from "../styling/property";
import "./harrowDeck.scss";
import Masonry from "react-masonry-css";
import masonryStyles from "../../styles/masonry.module.scss";
import classNames from "classnames";
import { Details } from "./details";

const breakpointColumnsObj = {
  default: 3,
  2000: 2,
  1000: 1,
};

export const DetailsView: React.FC = () => {
  return (
    <Flex>
      {harrowDeck.map((deck) => {
        return (
          <Flex className={"deck"}>
            <Flex className={"harrowTitle"}>
              <Property>{deck.ability}</Property>
              <h2>{deck.name}</h2>
              <p className={"harrowDesc"}>{deck.description}</p>
            </Flex>
            <Masonry
              className={classNames(masonryStyles.masonry, "deckCards")}
              columnClassName={masonryStyles.card}
              breakpointCols={breakpointColumnsObj}
            >
              {deck.cards.map(({ name }) => {
                return (
                  <Card key={name} className={"harrowDetailsViewCard"}>
                    <Flex className={"harrowContent"}>
                      <img
                        className={"harrowDetailsViewImg"}
                        alt={name}
                        src={require(`./images/${name}.jpg`).default}
                      />
                      <Details cardName={name} />
                    </Flex>
                  </Card>
                );
              })}
            </Masonry>
          </Flex>
        );
      })}
    </Flex>
  );
};
