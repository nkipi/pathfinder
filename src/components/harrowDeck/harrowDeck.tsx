import React from "react";
import { Flex } from "../layout/flex";
import { Heading } from "../styling/heading";
import styles from "./harrowDeck.module.scss";
import classNames from "classnames";
import { RiGridFill } from "react-icons/ri";
import { MdViewList } from "react-icons/md";
import { GridView } from "./gridView";
import { DetailsView } from "./detailsView";
import { IconButton, Paper, InputBase, Divider } from "@material-ui/core";
import { GiCardBurn, GiCardRandom } from "react-icons/gi";
import { FiDelete } from "react-icons/fi";
import { drawRandomCards, getAllCards } from "./getCards";
import { Helper } from "../styling/helper";

const MAX_CARD_NUMBER = 5;

export const HarrowDeck: React.FC = () => {
  const [view, setView] = React.useState<"grid" | "details">("details");
  const [randomCards, setRandomCards] = React.useState<string[]>([]);
  const [cardNumber, setCardNumber] = React.useState<undefined | number>(
    undefined
  );

  return (
    <div id={"harrowDeck"} className={styles.wrapper}>
      {renderHeader()}
      {randomCards.length > 0 ? (
        renderRandomCards()
      ) : (
        <>
          {isDetailsView() && <DetailsView />}
          {isGridView() && <GridView cards={getAllCards()} />}
        </>
      )}
    </div>
  );

  function renderHeader() {
    return (
      <Flex className={styles.heading}>
        <Heading>{"Harrow Deck"}</Heading>
        <MdViewList
          size={20}
          onClick={() => changeView("details")}
          className={classNames(styles.icon, {
            [styles.active]: isDetailsView(),
          })}
        />
        <RiGridFill
          size={16}
          onClick={() => changeView("grid")}
          className={classNames(styles.icon, {
            [styles.active]: isGridView(),
          })}
        />
        {renderInput()}
      </Flex>
    );
  }

  function changeView(view: "details" | "grid") {
    setView(view);
    resetRandomDrawing();
  }

  function resetRandomDrawing() {
    setRandomCards([]);
    setCardNumber(undefined);
  }

  function renderRandomCards() {
    return <GridView cards={randomCards} />;
  }

  function renderInput() {
    return (
      <Paper className={styles.input} variant={"outlined"}>
        <Flex className={styles.inputContent}>
          <IconButton className={styles.inputAdornment} disabled={true}>
            <GiCardBurn />
          </IconButton>
          <InputBase
            className={styles.inputField}
            placeholder="Draw random cards"
            type={"number"}
            value={cardNumber}
            onChange={(event) => setCardNumberValue(event)}
            key={cardNumber}
          />
          <IconButton
            className={styles.inputIcon}
            color={"primary"}
            onClick={() => setRandomCards(drawRandomCards(cardNumber))}
            disabled={cardNumber === 0 || cardNumber === undefined}
          >
            <GiCardRandom />
          </IconButton>
          <Divider className={styles.divider} orientation={"vertical"} />
          <IconButton
            className={styles.inputIcon}
            onClick={() => resetRandomDrawing()}
            disabled={cardNumber === 0 || cardNumber === undefined}
          >
            <FiDelete />
          </IconButton>
        </Flex>

        <Helper>
          <h6>Max value is {MAX_CARD_NUMBER}</h6>
        </Helper>
      </Paper>
    );
  }

  function setCardNumberValue(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    const value = Number(event.target.value);
    if (value > MAX_CARD_NUMBER) {
      setCardNumber(MAX_CARD_NUMBER);
    } else if (value < 0) {
      setCardNumber(0);
    } else {
      setCardNumber(value);
    }
  }

  function isGridView() {
    return view === "grid";
  }

  function isDetailsView() {
    return view === "details";
  }
};
