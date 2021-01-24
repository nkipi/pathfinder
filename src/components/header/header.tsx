import React from "react";
import { Flex } from "../layout/flex";
import "./header.scss";
import { orderBy, startCase, union } from "lodash";
import { StickyNotes } from "../stickyNotes/stickyNotes";
import { MainProps } from "../main/main";
import { isCharacter } from "../../utils/isCharacter";
import { getCharacterRoute } from "../../utils/getCharacterRoute";
import { RiHomeHeartFill } from "react-icons/ri";

export const Header: React.FC<MainProps> = ({ character }) => {
  const navigationLinks = orderBy(
    union(
      Object.entries(character)
        .filter(
          ([key]) =>
            key === "character" ||
            key === "weapons" ||
            key === "spells" ||
            key === "skills" ||
            key === "equipment"
        )
        .map(([key]) => key)
    ),
    (item) => item,
    ["asc"]
  );

  return (
    <Flex className={"headerFlex"}>
      <a href="/pathfinder" className={"homeIcon"}>
        <RiHomeHeartFill size={24} />
      </a>
      <Flex className={"navigationFlex"}>
        {navigationLinks.map((link) => {
          return (
            <a
              key={link}
              className={"headerLink"}
              href={`/pathfinder/${getCharacterRoute(character)}#${link}`}
            >
              {startCase(link)}
            </a>
          );
        })}
        {isCharacter(character, "zotha") && (
          <a key={"deck"} className={"headerLink"} href={`/pathfinder/deck`}>
            {"The Harrow Deck"}
          </a>
        )}
      </Flex>
      <StickyNotes />
    </Flex>
  );
};
