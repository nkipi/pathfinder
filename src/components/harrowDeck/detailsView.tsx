import React from "react";
import { harrowDeck } from "./getHarrowDeck";
import { Card } from "../layout/card";
import { Flex } from "../layout/flex";
import { Property } from "../styling/property";
import styles from "./harrowDeck.module.scss";
import Masonry from "react-masonry-css";
import masonryStyles from "../../styles/masonry.module.scss";
import classNames from "classnames";
import { Details } from "./details";

const breakpointColumnsObj = {
  default: 2,
  1000: 1,
};

export const DetailsView: React.FC = () => {
  return (
    <Flex>
      {harrowDeck.map((deck) => {
        return (
          <Flex className={styles.deck}>
            <Flex className={styles.title}>
              <Property>{deck.ability}</Property>
              <h2>{deck.name}</h2>
              <p className={styles.description}>{deck.description}</p>
            </Flex>
            <Masonry
              id={"character"}
              className={classNames(masonryStyles.masonry, styles.deckCards)}
              columnClassName={masonryStyles.card}
              breakpointCols={breakpointColumnsObj}
            >
              {deck.cards.map(
                ({ name, description, alignment, keywords, misalignments }) => {
                  return (
                    <Card key={name} className={styles.card}>
                      <Flex className={styles.content}>
                        <img
                          className={styles.image}
                          alt={name}
                          src={require(`./images/${name}.jpg`).default}
                        />
                        <Details cardName={name} />
                      </Flex>
                    </Card>
                  );
                }
              )}
            </Masonry>
          </Flex>
        );
      })}
    </Flex>
  );
};
