import classNames from "classnames";
import React from "react";
import { OptionalClassName } from "../../interfaces/optionalClassName";
import { Card } from "./card";
import { Flex } from "./flex";
import styles from "./smallCard.module.scss";

export const SmallCard: React.FC<OptionalClassName> = ({
  className,
  children,
}) => {
  return (
    <Card className={classNames(className, styles.smallCard)}>
      <Flex className={styles.smallFlex}>{children}</Flex>
    </Card>
  );
};
