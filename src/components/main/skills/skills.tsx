import React from "react";
import zotha from "../../../data/zotha.json";
import { Card } from "../../layout/card";
import { Flex } from "../../layout/flex";
import { Wrapper } from "../../layout/wrapper";
import { Heading } from "../../styling/heading";
import { Helper } from "../../styling/helper";
import { Property } from "../../styling/property";
import { orderBy } from "lodash";
import classNames from "classnames";
import styles from "./skills.module.scss";

export const Skills: React.FC = () => {
  const { skills } = zotha;

  const orderedSkills = orderBy(skills, (skill) => skill.name, ["asc"]);
  return (
    <Wrapper id={"skills"}>
      <Heading>{"Skills"}</Heading>
      <Flex>
        {orderedSkills.map((skill) => {
          const { name, classSkill, type, ranks, total } = skill;
          return (
            <Card key={name} className={classNames({[styles.classSkill]: classSkill})}>
              <Property>{name}</Property>
              {type && <p>{type}</p>}
              <h1>{total}</h1>
              <Helper>
                {Number(ranks) > 1 ? `${ranks} ranks` : `${ranks} rank`}
              </Helper>
            </Card>
          );
        })}
      </Flex>
    </Wrapper>
  );
};
