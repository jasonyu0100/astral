'use client';
import { useEffect, useState } from 'react';
import { DayColor, DayView } from './day/main';
import { FeltModal } from '@/(components)/(modal)/felt/main';
import { FormSelect } from '@/(components)/(form)/select/main';
import { FormButton } from '@/(components)/(form)/button/main';
import { HorizontalDivider } from '@/(components)/(line)/divider/horizontal/main';
import { Card } from '../../../../../../../../../(components)/(element)/card/main';
import { Dice, DiceFace } from '../../../../../../../../../(components)/(element)/dice/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { glassFx } from '@/(style)/data';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';

export enum CardSuit {
  Other = 'Other',
  Clubs = 'Clubs',
  Hearts = 'Hearts',
  Spades = 'Spades',
  Diamonds = 'Diamonds',
}

export enum CardNumber {
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

export enum CardColor {
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
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='flex w-full flex-col'>
      <FeltModal isOpen={showModal} onClose={() => setShowModal(false)}>
        <div className='flex h-full w-full flex-col items-center space-y-[2rem]'>
          <div className='flex h-full flex-row items-center'>
            {currentNumber === CardNumber.Joker ? (
              <img
                src={`/cards/Suit=Other, Number=${currentNumber}.png`}
                className='h-[150px] object-contain'
              />
            ) : (
              <img
                src={`/cards/Suit=${currentSuit}, Number=${currentNumber}.png`}
                className='h-[150px] object-contain'
              />
            )}
            <img
              src={`/cards/Suit=Other, Number=${currentColor}.png`}
              className='h-[150px] object-contain'
            />
          </div>
          <div className='flex w-full flex-col'>
            <div className='flex w-full flex-row'>
              <FormSelect
                title='Number'
                onChange={(e) => setCurrentNumber(e.target.value)}
              >
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
              </FormSelect>
              <FormSelect
                title='Suit'
                onChange={(e) => setCurrentSuit(e.target.value)}
              >
                {suitOrder.map((suit) => (
                  <option key={suit}>{suit}</option>
                ))}
              </FormSelect>
              <FormSelect
                title='Color'
                onChange={(e) => setCurrentSuit(e.target.value)}
              >
                {backColors.map((colors) => (
                  <option key={colors}>{colors}</option>
                ))}
              </FormSelect>
            </div>
            <FormButton onClick={() => setShowModal(false)}>DEAL</FormButton>
          </div>
        </div>
      </FeltModal>

      <div className='flex flex-col space-y-[1rem]'>
        <div className='flex h-full w-full flex-row space-x-[4rem]'>
          <div className='flex flex-col'>
            <div className='flex w-[500px] flex-row flex-wrap'>
              <DayView color={DayColor.Blue} />
              <DayView color={DayColor.Yellow} />
              <DayView color={DayColor.Blue} />
              <DayView color={DayColor.Blue} />
              <DayView color={DayColor.Blue} />
              <DayView color={DayColor.Blue} />
              <DayView color={DayColor.Blue} />
              <DayView color={DayColor.Blue} />
              <DayView color={DayColor.Green} />
              <DayView color={DayColor.Blue} />
              <DayView color={DayColor.Blue} />
              <DayView color={DayColor.Blue} />
              <DayView color={DayColor.Blue} />
              <DayView color={DayColor.Blue} />
              <DayView color={DayColor.Blue} />
              <DayView color={DayColor.Yellow} />
              <DayView color={DayColor.Blue} />
              <DayView color={DayColor.Blue} />
              <DayView color={DayColor.Blue} />
              <DayView color={DayColor.Blue} />
              <DayView color={DayColor.Green} />
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
        <HorizontalDivider />
        <button
          className='w-[300px] bg-white p-[1rem]'
          onClick={() => setShowModal(true)}
        >
          DEAL CARDS
        </button>
        <p className='text-lg font-bold text-slate-300 font-permanentMarker'>January</p>
        <div className='flex flex-col space-y-[1rem]'>
          <GlassWindowFrame>
            <GlassWindowContents className='flex flex-row p-[1rem]'>
              <Card suit={CardSuit.Spades} number={CardNumber.Ace} />
              <div className='p-[1rem]'>
                <p className='font-bold text-slate-300'>
                  11/5 - 10 contributions
                </p>
                <Dice face={DiceFace.Six} />
                <Dice face={DiceFace.One} />
                <Dice face={DiceFace.One} />
              </div>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-5']} />
          </GlassWindowFrame>

          <GlassWindowFrame>
            <GlassWindowContents className='flex flex-row p-[1rem]'>
              <Card suit={CardSuit.Spades} number={CardNumber.Ace} />
              <div className='p-[1rem]'>
                <p className='font-bold text-slate-300'>
                  11/5 - 10 contributions
                </p>
              </div>
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-5']} />
          </GlassWindowFrame>
        </div>
        <p className='text-lg font-bold text-slate-300'>February</p>
        <p className='text-lg font-bold text-slate-300'>March</p>
        <p className='text-lg font-bold text-slate-300'>March</p>
        <p className='text-lg font-bold text-slate-300'>March</p>
        <p className='text-lg font-bold text-slate-300'>March</p>
      </div>
    </div>
  );
}
