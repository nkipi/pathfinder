import React from "react";
import { Flex } from "../layout/flex";
import styles from "./header.module.scss";
import zotha from "../../data/zotha.json";
import { orderBy, startCase, union } from "lodash";

export const Header: React.FC = () => {
  const navigationLinks = orderBy(
    union(
      Object.entries(zotha)
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
    <Flex className={styles.header}>
      {navigationLinks.map((link) => {
        return (
          <a
            key={link}
            className={styles.link}
            href={`/#${link}`}
          >
            {startCase(link)}
          </a>
        );
      })}
      <a key={"deck"} className={styles.link} href="/deck">
        {"The Harrow Deck"}
      </a>
    </Flex>
  );

  function scrollToAnchor(link: string) {
    var element = document.getElementById(link);
    var offset = 100;
    if (element !== null) {
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }
};
