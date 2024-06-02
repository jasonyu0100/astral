'use client';
import { useEffect, useState } from 'react';
import { DayColor, DayView } from './day/main';

enum CardSuit {
  Other = 'Other',
  Clubs = 'Clubs',
  Hearts = 'Hearts',
  Spades = 'Spades',
  Diamonds = 'Diamonds',
}

enum CardNumber {
  Joker = 'Joker',
  Two = '2',
  Three = '3',
  Four = '4',
  Five = '5',
  Six = '6',
  Seven = '7',
  Eight = '8',
  Nine = '9',
  Ten = '10',
  Jack = 'Jack',
  King = 'King',
  Queen = 'Queen',
  Ace = 'Ace',
}

enum CardColor {
  Blue = 'Back Blue',
  Red = 'Back Red',
  Green = 'Back Green',
  Alpha = 'Back Alpha',
}

export function MonthView() {
  const days = 31;
  const [activeDays, changeActiveDays] = useState({});

  const [cards, setCards] = useState([]);
  const suitOrder = [
    CardSuit.Other,
    CardSuit.Spades,
    CardSuit.Hearts,
    CardSuit.Clubs,
    CardSuit.Diamonds,
  ];
  const numberOrder = [
    CardNumber.Ace,
    CardNumber.Two,
    CardNumber.Three,
    CardNumber.Four,
    CardNumber.Five,
    CardNumber.Six,
    CardNumber.Seven,
    CardNumber.Eight,
    CardNumber.Nine,
    CardNumber.Ten,
    CardNumber.Jack,
    CardNumber.Queen,
    CardNumber.King,
    CardNumber.Joker,
  ];
  const backColors = [
    CardColor.Red,
    CardColor.Green,
    CardColor.Blue,
    CardColor.Alpha,
  ];

  useEffect(() => {}, []);

  const [currentSuit, setCurrentSuit] = useState(CardSuit.Other);
  const [currentNumber, setCurrentNumber] = useState(CardNumber.Joker);
  const [currentColor, setCurrentColor] = useState(CardColor.Alpha);

  return (
    <div className='flex flex-col'>
      <div className='flex h-full w-full flex-row space-x-[4rem] p-[3rem] bg-black'>
        <div className='flex flex-row'>
          <div className='flex flex-row'>
            {currentNumber === CardNumber.Joker ? (
              <img src={`/cards/Suit=Other, Number=${currentNumber}.png`} />
            ) : (
              <img
                src={`/cards/Suit=${currentSuit}, Number=${currentNumber}.png`}
              />
            )}
            <img src={`/cards/Suit=Other, Number=${currentColor}.png`} />
          </div>
        </div>
        <div className='flex flex-col'>
          <p className='font-bold'>Number</p>
          <select onChange={(e) => setCurrentNumber(e.target.value)}>
            {currentSuit === CardSuit.Other ? (
              <>
                <option key={CardNumber.Joker}>{CardNumber.Joker}</option>
              </>
            ) : (
              <>
                {numberOrder
                  .filter((number) => number !== CardNumber.Joker)
                  .map((number) => (
                    <option key={number}>{number}</option>
                  ))}
              </>
            )}
          </select>
        </div>
        <div className='flex flex-col'>
          <p className='font-bold'>Suit</p>
          <select onChange={(e) => setCurrentSuit(e.target.value)}>
            {suitOrder.map((suit) => (
              <option key={suit}>{suit}</option>
            ))}
          </select>
        </div>
        <div className='flex flex-col'>
          <p className='font-bold'>Color</p>
          <select onChange={(e) => setCurrentColor(e.target.value)}>
            {backColors.map((colors) => (
              <option key={colors}>{colors}</option>
            ))}
          </select>
        </div>
      </div>
      <div className='flex h-full w-full flex-row space-x-[4rem] p-[3rem]'>
        <div className='flex flex-col space-y-[2rem]'>
          <p className='text-slate-500 text-lg font-medium'>Blank Contributions</p>
          <div className='flex w-[500px] flex-row flex-wrap'>
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
          </div>
        </div>
        <div className='flex flex-col space-y-[2rem]'>
          <p className='text-slate-500 text-lg font-medium'>Space Contributions</p>
          <div className='flex w-[500px] flex-row flex-wrap'>
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
            <DayView color={DayColor.Blue} />
          </div>
        </div>
      </div>
    </div>
  );
}
