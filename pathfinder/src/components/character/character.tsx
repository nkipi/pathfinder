import React from "react";
import zotha from "../../data/zotha.json";

interface Spell {
  level: string;
  name: string;
}

interface Spells {
  dc: string;
  slotted: Spell[];
  slotsPerDay: string;
}

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

function renderSpells(value: Spells[]) {
  return value.map((spells) => {
    return (
      <>
        <h4>{spells.dc}</h4>
        <h4>{spells.slotsPerDay}</h4>
        {spells?.slotted?.map((spell) => {
          return (
            <>
              <h4>{spell.level}</h4>
              <div>{spell.name}</div>
            </>
          );
        })}
      </>
    );
  });
}
