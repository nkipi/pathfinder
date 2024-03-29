import React from "react";
import zothaPortrait from "../../images/zotha_dark.jpg";
import twinklePortrait from "../../images/twinkle.jpg";
import kennaPortrait from "../../images/kenna.jpg";
import { Flex } from "../layout/flex";
import "./characterSelection.scss";
import { Heading } from "../styling/heading";

export const CharacterSelection: React.FC = () => {
  return (
    <Flex className={"charSelFlex"}>
      <Heading>Characters</Heading>
      <Flex>
        <a href="/pathfinder/zotha">
          <img
            src={zothaPortrait}
            alt={"character"}
            className={"charSelPortrait"}
          />
        </a>
        <a href="/pathfinder/twinkle" className={"charSelCard"}>
          <img
            src={twinklePortrait}
            alt={"character"}
            className={"charSelPortrait"}
          />
        </a>
        <a href="/pathfinder/kenna" className={"charSelCard"}>
          <img
            src={kennaPortrait}
            alt={"character"}
            className={"charSelPortrait"}
          />
        </a>
      </Flex>
    </Flex>
  );
};
