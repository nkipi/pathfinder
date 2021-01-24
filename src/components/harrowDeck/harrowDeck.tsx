import React from "react";
import { Flex } from "../layout/flex";
import { Heading } from "../styling/heading";
import "./harrowDeck.scss";
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
    <div id={"harrowDeck"} className={"harrowWrapper theme-zotha"}>
      <a href={"/pathfinder/zotha"} className={"backLink"}>
        <Helper className={"backLink"}>Back to Zotha</Helper>
      </a>
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
      <Flex className={"harrowHeading"}>
        <Heading>{"Harrow Deck"}</Heading>
        <Flex className={"harrowIcons"}>
          <MdViewList
            size={20}
            onClick={() => changeView("details")}
            className={classNames(
              "harrowIcon",
              isDetailsView() ? "active" : ""
            )}
          />
          <RiGridFill
            size={16}
            onClick={() => changeView("grid")}
            className={classNames("harrowIcon", isGridView() ? "active" : "")}
          />
        </Flex>
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
      <Paper className={"harrowInput"} variant={"outlined"}>
        <Flex className={"harrowInputContent"}>
          <IconButton className={"harrowInputAdornment"} disabled={true}>
            <GiCardBurn />
          </IconButton>
          <InputBase
            className={"inputField"}
            placeholder="Draw random cards"
            type={"number"}
            value={cardNumber}
            onChange={(event) => setCardNumberValue(event)}
            key={cardNumber}
          />
          <IconButton
            className={classNames("harrowInputIcon", "harrowGenIcon")}
            color={"primary"}
            onClick={() => setRandomCards(drawRandomCards(cardNumber))}
            disabled={cardNumber === 0 || cardNumber === undefined}
          >
            <GiCardRandom />
          </IconButton>
          <Divider className={"harrowDivider"} orientation={"vertical"} />
          <IconButton
            className={classNames("harrowInputIcon", "harrowResetIcon")}
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
