import React from "react";
import { Flex } from "../layout/flex";
import { Heading } from "../styling/heading";
import styles from "./harrowDeck.module.scss";
import classNames from "classnames";
import { RiGridFill } from "react-icons/ri";
import { MdViewList } from "react-icons/md";
import { GridView } from "./gridView";
import { DetailsView } from "./detailsView";

export const HarrowDeck: React.FC = () => {
  const [view, setView] = React.useState<"grid" | "details">("details");
  return (
    <div id={"harrowDeck"} className={styles.wrapper}>
      <Flex className={styles.heading}>
        <Heading>{"Harrow Deck"}</Heading>
        <MdViewList
          size={20}
          onClick={() => setView("details")}
          className={classNames(styles.icon, {
            [styles.active]: isDetailsView(),
          })}
        />
        <RiGridFill
          size={16}
          onClick={() => setView("grid")}
          className={classNames(styles.icon, {
            [styles.active]: isGridView(),
          })}
        />
      </Flex>
      {isDetailsView() && <DetailsView />}
      {isGridView() && <GridView />}
    </div>
  );

  function isGridView() {
    return view === "grid";
  }

  function isDetailsView() {
    return view === "details";
  }
};
