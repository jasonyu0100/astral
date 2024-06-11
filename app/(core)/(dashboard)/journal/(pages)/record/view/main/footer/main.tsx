import { GlassWindowContents } from "@/(components)/(glass)/window/contents/main";
import { GlassWindowFrame } from "@/(components)/(glass)/window/main";
import { GlassWindowPane } from "@/(components)/(glass)/window/pane/main";
import { roundedFx, glassFx } from "@/(style)/data";

export function JournalMainFooter() {
    return <GlassWindowFrame className='h-[5rem] w-full flex-shrink-0 shadow-glow'>
        <GlassWindowContents className='flex flex-row items-center px-[2rem]'>
          <div className='flex w-1/3 flex-row justify-start  space-x-[1rem]'>
            <p className='text-3xl font-bold text-slate-300'>Fri 26th</p>
            <p className='text-3xl font-bold text-slate-300'>|</p>
            <p className='text-3xl font-bold text-slate-300'>23:59:59</p>
          </div>
          <div className='flex w-1/3 flex-row justify-center space-x-[1rem] '>
            <GlassWindowFrame
              className='aspect-square h-[3rem] w-[3rem]'
              roundedFx={roundedFx['rounded-full']}
            >
              <GlassWindowContents className="flex justify-center items-center">
                <p className='text-3xl font-bold text-slate-300'>+</p>
              </GlassWindowContents>
              <GlassWindowPane glassFx={glassFx['glass-5']}/>
            </GlassWindowFrame>
          </div>
          <div className='flex w-1/3 flex-row justify-end  space-x-[1rem]'>
            <p className='text-3xl font-bold text-slate-300'>16 / 50</p>
          </div>
        </GlassWindowContents>
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
}