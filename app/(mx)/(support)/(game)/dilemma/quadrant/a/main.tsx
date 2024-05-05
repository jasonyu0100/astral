import React, { useState } from "react";
import { borderFx, glassFx } from '@/(fx)/data';
import { GlassWindowContents } from '@/(lib)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(lib)/(glass)/window/main';
import { GlassWindowPane } from '@/(lib)/(glass)/window/pane/main';
import { TwoByTwo } from '@/(mx)/(support)/(game)/dilemma/page';

export function Quadrant({ board }: { board: TwoByTwo }) {
  const [flipped, changeFlipped] = useState(false);
  return (
    <div onClick={() => changeFlipped(!flipped)}>
      <GlassWindowFrame
        className='aspect-square h-[20rem] w-[20rem] cursor-pointer'
        borderFx={`${borderFx['border-r']} ${borderFx['border-b']}`}
      >
        <GlassWindowContents className='flex flex-col items-center justify-center font-extraBold text-xl text-slate-300'>
          {!flipped ? (
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
