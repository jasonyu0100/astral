'use client';
import { borderFx, glassFx } from '@/(fx)/data';
import { GlassWindowContents } from '@/(lib)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(lib)/(glass)/window/main';
import { GlassWindowPane } from '@/(lib)/(glass)/window/pane/main';
import { useEffect, useState } from 'react';

export interface TwoByTwo {
  topLeft: PlayerOutcome;
  topRight: PlayerOutcome;
  bottomLeft: PlayerOutcome;
  bottomRight: PlayerOutcome;
}
export interface PlayerOutcome {
  playerA: string;
  playerB: string;
}

function Quadrant({ board }: { board: TwoByTwo }) {
  const [flipped, changeFlipped] = useState(false);
  return (
    <div onClick={() => changeFlipped(!flipped)}>
      <GlassWindowFrame
        className='aspect-square h-[20rem] w-[20rem] cursor-pointer'
        borderFx={`${borderFx['border-r']} ${borderFx['border-b']}`}
      >
        <GlassWindowContents className='flex flex-col items-center justify-center font-extraBold text-xl text-slate-300'>
          {flipped ? (
            <>
              <p>A</p>
              <p>
                {board.topLeft.playerA} / {board.topLeft.playerB}
              </p>
              <p>(1.5 , ++)</p>
            </>
          ) : (
            <>
              <p>A</p>
            </>
          )}
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </div>
  );
}

function PhaseActions({ cards }: { cards: any[] }) {
  const [cardIndex, changeCardIndex] = useState(0);
  const [showPlaceActions, changeShowPlaceActions] = useState(false);
  return (
    <div className='flex flex-col space-y-[1rem]'>
      <p className='font-extraBold text-xl text-slate-300 '>Phase 1</p>

      <div className='flex aspect-[12/16] h-[5rem] bg-white'>
        Card - {cards[cardIndex]}
      </div>

      {!showPlaceActions ? (
        <div className=' flex flex-row space-x-[1rem]'>
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
            onClick={() => changeShowPlaceActions(true)}
          >
            Place
          </div>
          <div
            className='flex aspect-[12/16] h-[5rem] bg-white'
            onClick={() => {
              changeCardIndex((cardIndex + 1) % 4);
            }}
          >
            Next
          </div>
          <div
            className='flex aspect-[12/16] h-[5rem] bg-white'
            onClick={() => {
              alert('finish');
            }}
          >
            Finish
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
            Place A
          </div>
          <div
            className='flex aspect-[12/16] h-[5rem] bg-white'
            onClick={() => {
              changeCardIndex((cardIndex + 1) % 4);
            }}
          >
            Place P
          </div>
          <div
            className='flex aspect-[12/16] h-[5rem] bg-white'
            onClick={() => {
              changeCardIndex((cardIndex + 1) % 4);
            }}
          >
            Place B
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
        <p className='text-md font-bold text-slate-500 '>
          Player 1 placed ? at A (2/2 , ++)
        </p>
        <p className='text-md font-bold text-slate-500 '>
          Player 1 placed ? at P1 (4/0 , +0)
        </p>
        <p className='text-md font-bold text-slate-500 '>
          Player 2 placed ? at A (2/2 , ++)
        </p>
        <p className='text-md font-bold text-slate-500 '>
          Player 2 placed ? at B (1/-1 , ??)
        </p>
      </div>
    </div>
  );
}

export default function Page() {
  const [board, changeBoard] = useState<TwoByTwo>({
    topLeft: {
      playerA: 5,
      playerB: 5,
    },
    topRight: {
      playerA: 8,
      playerB: 0,
    },
    bottomLeft: {
      playerA: 0,
      playerB: 8,
    },
    bottomRight: {
      playerA: 2,
      playerB: 2,
    },
  });

  return (
    <div className='flex flex-row  space-x-[3rem] p-[3rem]'>
      <div className='flex flex-col'>
        <p className='mb-[3rem] font-extraBold text-xl text-slate-300 '>Dual</p>
        <div className='flex flex-col'>
          <div className='flex flex-row'>
            <Quadrant board={board} />
            <GlassWindowFrame
              className='aspect-square h-[20rem] w-[20rem]'
              borderFx={`${borderFx['border-l']} ${borderFx['border-b']}`}
            >
              <GlassWindowContents className='flex flex-col items-center justify-center font-extraBold text-xl text-slate-300'>
                <p>P1</p>
                <p>
                  {board.topRight.playerA} / {board.topRight.playerB}
                </p>
                <p>(1.0 , +0)</p>
              </GlassWindowContents>
              <GlassWindowPane glassFx={glassFx['glass-5']} />
            </GlassWindowFrame>
          </div>
          <div className='flex flex-row'>
            <GlassWindowFrame
              className='aspect-square h-[20rem] w-[20rem]'
              borderFx={`${borderFx['border-r']} ${borderFx['border-t']}`}
            >
              <GlassWindowContents className='flex flex-col items-center justify-center font-extraBold text-xl text-slate-300'>
                <p>P2</p>
                <p>
                  {board.bottomLeft.playerA} / {board.bottomLeft.playerB}
                </p>
                <p>(1.0 , 0+)</p>
              </GlassWindowContents>
              <GlassWindowPane glassFx={glassFx['glass-5']} />
            </GlassWindowFrame>
            <GlassWindowFrame
              className='aspect-square h-[20rem] w-[20rem]'
              borderFx={`${borderFx['border-l']} ${borderFx['border-t']}`}
            >
              <GlassWindowContents className='flex flex-col items-center justify-center font-extraBold text-xl text-slate-300'>
                <p>B</p>
                <p>
                  {board.bottomRight.playerA} / {board.bottomRight.playerB}
                </p>
                <p>(1.0 , ??)</p>
              </GlassWindowContents>
              <GlassWindowPane glassFx={glassFx['glass-5']} />
            </GlassWindowFrame>
          </div>
        </div>
      </div>
      <div className='flex h-[40rem] flex-grow flex-col space-y-[3rem] overflow-auto'>
        <p className='mb-[3rem] font-extraBold text-xl text-slate-300 '>
          Player 1
        </p>
        <div className='flex flex-col space-y-[1rem]'>
          <p className='font-extraBold text-xl text-slate-300 '>Draw</p>
          <div className='flex flex-row space-x-[1rem]'>
            <div className='flex aspect-[12/16] h-[5rem] bg-white'>A</div>
            <div className='flex aspect-[12/16] h-[5rem] bg-white'>K</div>
            <div className='flex aspect-[12/16] h-[5rem] bg-white'>Q</div>
            <div className='flex aspect-[12/16] h-[5rem] bg-white'>J</div>
          </div>
        </div>
        <PhaseActions cards={['A', 'K', 'Q', 'J']} />
        <div className='flex flex-col space-y-[1rem]'>
          <p className='font-extraBold text-xl text-slate-300 '>Phase 2</p>
          <div className=' flex flex-row space-x-[1rem]'>
            <div className='flex aspect-[12/16] h-[5rem] bg-white'>Pass</div>
            <div className='flex aspect-[12/16] h-[5rem] bg-white'>Place</div>
            <div className='flex aspect-[12/16] h-[5rem] bg-white'>Call</div>
          </div>
          <div className=' flex flex-row space-x-[1rem]'>
            <div className='flex aspect-[12/16] h-[5rem] bg-white'>Back</div>
            <div className='flex aspect-[12/16] h-[5rem] bg-white'>Place A</div>
            <div className='flex aspect-[12/16] h-[5rem] bg-white'>Place P</div>
            <div className='flex aspect-[12/16] h-[5rem] bg-white'>Place B</div>
            <div className='flex aspect-[12/16] h-[5rem] bg-white'>Next</div>
          </div>
          <div className='flex flex-col'>
            <p className='text-md font-bold text-slate-500 '>
              Player 1 placed ? at B (1/-1 , ??)
            </p>
            <p className='text-md font-bold text-slate-500 '>
              Player 2 placed ? at P2 (0/4 , 0+)
            </p>
          </div>
        </div>
        <div className='flex flex-col space-y-[1rem]'>
          <p className='font-extraBold text-xl text-slate-300 '>Phase 3</p>
          <div className=' flex flex-row space-x-[1rem]'>
            <div className='flex aspect-[12/16] h-[5rem] bg-white'>Pass</div>
            <div className='flex aspect-[12/16] h-[5rem] bg-white'>Place</div>
            <div className='flex aspect-[12/16] h-[5rem] bg-white'>Call</div>
          </div>
          <div className=' flex flex-row space-x-[1rem]'>
            <div className='flex aspect-[12/16] h-[5rem] bg-white'>Back</div>
            <div className='flex aspect-[12/16] h-[5rem] bg-white'>Place A</div>
            <div className='flex aspect-[12/16] h-[5rem] bg-white'>Place P</div>
            <div className='flex aspect-[12/16] h-[5rem] bg-white'>Place B</div>
            <div className='flex aspect-[12/16] h-[5rem] bg-white'>Next</div>
          </div>
          <div className='flex flex-col'>
            <p className='text-md font-bold text-slate-500 '>Player 1 passed</p>
            <p className='text-md font-bold text-slate-500 '>
              Player 2 placed ? at P2 (0/4 , 0+)
            </p>
            <p className='text-md font-bold text-slate-500 '>
              Player 1 placed ? at B (1/-1 , ??)
            </p>
          </div>
        </div>
        <div className='flex flex-col space-y-[1rem]'>
          <p className='font-extraBold text-xl text-slate-300 '>Reveal</p>
          <p className='text-md font-bold text-slate-500 '>Draw</p>
          <div className='flex flex-col'>
            <p className='text-md font-bold text-slate-500 '>
              Player 1 received A, K, Q, J with a value of 50
            </p>
            <p className='text-md font-bold text-slate-500 '>
              Player 2 received 2, 3, 4, 5 with a value of 14
            </p>
          </div>
          <p className='text-md font-bold text-slate-500 '>P1</p>
          <div className='flex flex-col'>
            <p className='text-md font-bold text-slate-500 '>
              Player 1 placed Q at A (2/2 , ++)
            </p>
            <p className='text-md font-bold text-slate-500 '>
              Player 1 placed J at P1 (4/0 , +0)
            </p>
            <p className='text-md font-bold text-slate-500 '>
              Player 2 placed 5 at A (2/2 , ++)
            </p>
            <p className='text-md font-bold text-slate-500 '>
              Player 2 placed 4 at B (1/-1 , ??)
            </p>
          </div>
          <p className='text-md font-bold text-slate-500 '>P2</p>
          <div className='flex flex-col'>
            <p className='text-md font-bold text-slate-500 '>
              Player 1 placed A at B (1/-1 , ??)
            </p>
            <p className='text-md font-bold text-slate-500 '>
              Player 2 placed 3 at P2 (0/4 , 0+)
            </p>
          </div>
          <p className='text-md font-bold text-slate-500 '>P3</p>
          <div className='flex flex-col'>
            <p className='text-md font-bold text-slate-500 '>Player 1 passed</p>
            <p className='text-md font-bold text-slate-500 '>
              Player 2 placed 2 at P2 (0/4 , 0+)
            </p>
            <p className='text-md font-bold text-slate-500 '>
              Player 1 placed K at B (1/-1 , ??)
            </p>
          </div>
          <p className='text-md font-bold text-slate-500 '>Reveal</p>
          <div className='flex flex-col'>
            <div className='flex flex-col'>
              <p className='text-md font-bold text-slate-500'>
                A - (Q) and (5)
              </p>
              <p className='text-md font-bold text-slate-500'>
                sum(12, 5) = 17, max(12, 5) = P1
              </p>
            </div>
            <div className='flex flex-col'>
              <p className='text-md font-bold text-slate-500 '>
                P - (J) and (3,2)
              </p>
              <p className='text-md font-bold text-slate-500 '>
                sum(11, 5) = 16, max(11, 5) = P1
              </p>
            </div>
            <div className='flex flex-col'>
              <p className='text-md font-bold text-slate-500'>
                B - (A, K) and (4)
              </p>
              <p className='text-md font-bold text-slate-500'>
                sum(27, 4) = 31, max(27, 4) = P1
              </p>
            </div>
          </div>
          <p className='text-md font-bold text-slate-500 '>Results</p>
          <div className='flex flex-col'>
            <p className='text-md font-bold text-slate-500'>Player 1 wins</p>
            <p className='text-md font-bold text-slate-500'>P1 += 54</p>
            <p className='text-md font-bold text-slate-500'>P2 -= 8</p>
            <br />
            <p className='text-md font-bold text-slate-500'>House wins</p>
            <p className='text-md font-bold text-slate-500 '>P1 -= 50</p>
            <p className='text-md font-bold text-slate-500 '>P2 -= 14</p>
            <br />
            <p className='text-md font-bold text-slate-500'>Region B wins</p>
            <p className='text-md font-bold text-slate-500'>
              B31 vs A17 vs P16
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
