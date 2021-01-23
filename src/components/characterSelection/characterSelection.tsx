import React from "react";
import { Card } from "../layout/card";
import zothaPortrait from "../../images/zotha_dark.jpg";
import twinklePortrait from "../../images/twinkle.jpg";
import { Flex } from "../layout/flex";
import "./characterSelection.scss";
import { Heading } from "../styling/heading";

export const CharacterSelection: React.FC = () => {
  return (
    <Flex className={"charSelFlex"}>
      <Heading>Characters</Heading>
      <Flex>
        <a href="/zotha">
          <img
            src={zothaPortrait}
            alt={"character"}
            className={"charSelPortrait"}
          />
        </a>
        <a href="/twinkle" className={"charSelCard"}>
          <img
            src={twinklePortrait}
            alt={"character"}
            className={"charSelPortrait"}
          />
        </a>
      </Flex>
    </Flex>
  );
};
