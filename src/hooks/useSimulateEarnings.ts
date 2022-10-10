import { useState, useEffect } from 'react';

/*
const validation = 10000;
const tiketPrice = 2;
let playersTiketAmount = [];
let userNumberOfTikets = 100;

const minPlayerNum = 1;
// let maxPlayerNum = 100;
const minTiketAmount = 1;
// let maxTiketAmount = 1000;
let maxNumberOfTiketsSellByNFTAllOwners;
let percentValueOfEachTiketsSellAmount = [];
let incomePerOwner = [];
let totalSellValueWithoutValidation;
let numberOfPlayers;

const percentCalculation = () => {
  for (let i = 0; i < playersTiketAmount.length; i++) {
    let percent = (playersTiketAmount[i] / maxNumberOfTiketsSellByNFTAllOwners) * 100;
    percentValueOfEachTiketsSellAmount.push(percent);
  }
};

const amountOfMoneyByTiketsSell = () => {
  for (let i = 0; i < percentValueOfEachTiketsSellAmount.length; i++) {
    incomePerOwner.push(
      (percentValueOfEachTiketsSellAmount[i] * totalSellValueWithoutValidation) / 100,
    );
  }
};

const getUserIncome = () => {
  return incomePerOwner.slice(-1);
};

export const random = (nrOfTickets, nrOfPlayers) => {
  // console.log(nrOfTickets, nrOfPlayers);
  let playerNumber = Math.floor(Math.random() * (nrOfPlayers - minPlayerNum + 1));
  numberOfPlayers = playerNumber;

  for (let i = 0; i < playerNumber; i++) {
    let tiketAmountPerPlayer = Math.floor(Math.random() * (nrOfTickets - minTiketAmount + 1));
    playersTiketAmount.push(tiketAmountPerPlayer);
  }
  playersTiketAmount = [...playersTiketAmount, userNumberOfTikets];
  const sum = playersTiketAmount.reduce((prevValue, currentValue) => {
    return prevValue + currentValue;
  }, 0);

  maxNumberOfTiketsSellByNFTAllOwners = sum;

  percentCalculation();
  amountOfMoneyByTiketsSell();
  getUserIncome();
};

// random();

 */

const userNumberOfTickets = 100;
const minTiketAmount = 1;
const ticketPrice = 2;
const validationSum = 10000;

export const useSimulateEarnings = (nrOfTickets: number, nrOfNftOwners: number) => {
  const [incomePerOwner, setIncomePerOwner] = useState(0);
  const [calculatingEarnings, setCalculatingEarnings] = useState(false);

  const [playersTicketAmount, setPlayersTicketAmount] = useState<number[]>([]);
  const [maxNumberOfTicketsSellByNFTAllOwners, setMaxNumberOfTicketsSellByNFTAllOwners] =
    useState<number>(0);
  const [percentValueOfEachTiketsSellAmount, setPercentValueOfEachTiketsSellAmount] = useState<any>(
    [],
  );
  const [totalSellValueWithoutValidation, setTotalSellValueWithoutValidation] = useState(0);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    if (nrOfTickets !== 0 && nrOfNftOwners !== 0) {
      const initCalculations = async () => {
        const playerNumber = Math.floor(Math.random() * (nrOfNftOwners - 1 + 1));

        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < playerNumber; i++) {
          const ticketAmountPerPlayer = Math.floor(
            Math.random() * (nrOfTickets - minTiketAmount + 1),
          );
          setPlayersTicketAmount((prevState) => [...prevState, ticketAmountPerPlayer]);
        }

        await setPlayersTicketAmount((prevState) => [...prevState, userNumberOfTickets]);

        await setSum(
          playersTicketAmount.reduce((prevValue, currentValue) => {
            return prevValue + currentValue;
          }, 0),
        );

        await setMaxNumberOfTicketsSellByNFTAllOwners(sum);
        await setTotalSellValueWithoutValidation(sum * ticketPrice - validationSum);

        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < playersTicketAmount.length; i++) {
          const percent = (playersTicketAmount[i] / maxNumberOfTicketsSellByNFTAllOwners) * 100;
          setPercentValueOfEachTiketsSellAmount((...prevState: any) => [...prevState, percent]);
        }

        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < percentValueOfEachTiketsSellAmount.length; i++) {
          setIncomePerOwner(
            (percentValueOfEachTiketsSellAmount[i] * totalSellValueWithoutValidation) / 100,
          );
        }

        await setCalculatingEarnings(false);
      };

      const simulateEarnings = setTimeout(() => {
        setCalculatingEarnings(true);

        initCalculations();
      }, 1000);

      return () => {
        clearTimeout(simulateEarnings);
        setCalculatingEarnings(false);
      };
    }
  }, [
    sum,
    totalSellValueWithoutValidation,
    playersTicketAmount,
    maxNumberOfTicketsSellByNFTAllOwners,
    percentValueOfEachTiketsSellAmount,
    nrOfTickets,
    nrOfNftOwners,
  ]);

  return { incomePerOwner, calculatingEarnings };
};
