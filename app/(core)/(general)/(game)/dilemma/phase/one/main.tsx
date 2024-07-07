import { useState } from 'react';

export function PhaseOne({ cards }: { cards: any[] }) {
  const [cardIndex, changeCardIndex] = useState(0);
  const [showPlaceActions, changeShowPlaceActions] = useState(false);
  const [phase, changePhase] = useState(0);

  return (
    <div className='flex flex-col space-y-[1rem]'>
      <p className='font-extraBold text-xl text-slate-700 '>Phase One</p>

      <div className='flex aspect-[12/16] h-[5rem] bg-white'>
        Card - {cards[cardIndex]}
      </div>

      {!showPlaceActions ? (
        <div className=' flex flex-row space-x-[1rem]'>
          <div
            className='flex aspect-[12/16] h-[5rem] bg-white'
            onClick={() => changeShowPlaceActions(true)}
          >
            Play
          </div>
          <div
            className='flex aspect-[12/16] h-[5rem] bg-white'
            onClick={() => alert('Fold Hand')}
          >
            Fold
          </div>
          <div
            className='flex aspect-[12/16] h-[5rem] bg-white'
            onClick={() => {
              changeCardIndex((4 + cardIndex - 1) % 4);
            }}
          >
            Back
          </div>
          <div
            className='flex aspect-[12/16] h-[5rem] bg-white'
            onClick={() => {
              changeCardIndex((cardIndex + 1) % 4);
            }}
          >
            Next
          </div>
        </div>
      ) : (
        <div className=' flex flex-row space-x-[1rem]'>
          <div
            className='flex aspect-[12/16] h-[5rem] bg-white'
            onClick={() => {
              changeCardIndex((cardIndex + 1) % 4);
            }}
          >
            Play A
          </div>
          <div
            className='flex aspect-[12/16] h-[5rem] bg-white'
            onClick={() => {
              changeCardIndex((cardIndex + 1) % 4);
            }}
          >
            Play P
          </div>
          <div
            className='flex aspect-[12/16] h-[5rem] bg-white'
            onClick={() => {
              changeCardIndex((cardIndex + 1) % 4);
            }}
          >
            Play B
          </div>
          <div
            className='flex aspect-[12/16] h-[5rem] bg-white'
            onClick={() => changeShowPlaceActions(false)}
          >
            Cancel
          </div>
        </div>
      )}
      <div className='flex flex-col'>
        <p className='text-md font-bold text-slate-700 '>
          Player 1 played ? at A (2 / 2 , ++)
        </p>
        <p className='text-md font-bold text-slate-700 '>
          Player 1 played ? at P (8 / 0 , +o)
        </p>
        <p className='text-md font-bold text-slate-700 '>
          Player 2 played ? at A (2 / 2 , ++)
        </p>
        <p className='text-md font-bold text-slate-700 '>
          Player 2 played ? at B (2? / 2 , ?+)
        </p>
      </div>
    </div>
  );
}
