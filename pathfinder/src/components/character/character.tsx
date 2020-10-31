import React from "react";
import zotha from "../../data/zotha.json";
import { Spell } from "../../interfaces/spells";

export const Character: React.FC = () => {
  return (
    <>
      {Object.entries(zotha).map(([key, value]) => {
        return (
          <>
            <h2>{key}</h2>
            {renderByKey(key, value)}
          </>
        );
      })}
    </>
  );
};

function renderByKey(key: string, value: any) {
  switch (key) {
    case "spells":
      return renderSpells(value);
  }
}

function renderSpells(value: Spell[]) {
  return value.map((spell) => {
    return (
      <>
        <h4>{spell.level}</h4>
        <h3>{spell.name}</h3>
      </>
    );
  });
}
