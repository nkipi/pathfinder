import React from "react";
import zotha from "../../../data/zotha.json";

export const Spells: React.FC = () => {
  const { spells } = zotha;
  return (
    <>
      {spells.map(spell => {
          return <>
          {spell.name}
          </>
      })}
    </>
  );
};
