import { getRandomInt } from "../../utils/getRandomInt";
import { harrowDeck } from "./getHarrowDeck";

export function getAllCards() {
  return harrowDeck.flatMap((deck) =>
    deck.cards.flatMap((card) => {
      return card.name;
    })
  );
}

export function getCardInfo(cardName: string) {
  return harrowDeck.flatMap((deck) => {
    return deck.cards.filter((card) => card.name === cardName);
  })[0];
}

export function drawRandomCards(quantity: number | undefined) {
  var randomNumbers = [];
  if(quantity !== undefined) {
    for (var i = 0; i < quantity; i++) {
      randomNumbers.push(getRandomInt(54));
    }
  }
  return randomNumbers.map(number => getAllCards()[number]);
}
