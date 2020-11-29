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
  if (quantity !== undefined) {
    while (randomNumbers.length < quantity) {
      const randomNumber = getRandomInt(54);

      if(randomNumbers.length === 0) {
        randomNumbers.push(randomNumber);
      }

      if (randomNumbers.indexOf(randomNumber) === -1) {
        randomNumbers.push(randomNumber);
      }

      if(randomNumbers.length === quantity) {
        break;
      }
    }
  }
  return randomNumbers.map((number) => getAllCards()[number]);
}
