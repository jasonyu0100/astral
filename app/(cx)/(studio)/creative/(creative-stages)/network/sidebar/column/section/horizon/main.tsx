import { GlassWindowContents } from '@/(components)/(basic)/glass/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(basic)/glass/window/main';
import { GlassWindowPane } from '@/(components)/(basic)/glass/window/pane/main';
import {
  borderStyles,
  glassStyles,
  roundedStyles,
} from '@/(design)/(styles)/data';
import { ToggleContext } from '@/(logic)/internal/contexts/toggle/main';
import { exampleFile } from '@/(logic)/internal/model/resource/file/main';
import { useState } from 'react';

export function SidebarNetworkHorizon() {
  const file = exampleFile;
  const [expanded, changeExpanded] = useState(false);

  return (
    <ToggleContext.Provider
      value={{ toggled: expanded, toggle: () => changeExpanded(!expanded) }}
    >
      <GlassWindowFrame
        className='min-h-[80px] w-full p-[15px]'
        roundedStyle={roundedStyles['rounded-sm']}
        borderStyle={borderStyles['border-all']}
      >
        <GlassWindowContents className='flex flex-col space-y-[1rem]'>
          <div className='flex flex-row items-center space-x-[2rem]'>
            <img className='h-[50px] w-[50px]' src={file.src} />
            <p className='text-lg font-bold text-slate-300'>
              Project Horizon - John Smith
            </p>
            <button
              className='h-[50px] w-[50px]'
              onClick={() => changeExpanded(!expanded)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-1/2 w-1/2'
                viewBox='0 0 24 24'
                fill='none'
              >
                <mask
                  id='mask0_3190_7'
                  maskUnits='userSpaceOnUse'
                  x='0'
                  y='0'
                  width='24'
                  height='24'
                >
                  <rect width='24' height='24' fill='#D9D9D9' />
                </mask>
                <g mask='url(#mask0_3190_7)'>
                  <path
                    d='M12 15.375L6 9.37498L7.4 7.97498L12 12.575L16.6 7.97498L18 9.37498L12 15.375Z'
                    fill='#CBD5E1'
                  />
                </g>
              </svg>
            </button>
          </div>
          {expanded && (
            <>
              <div className='flex flex-row items-center space-x-[2rem]'>
                <img className='h-[50px] w-[50px]' src={file.src} />
                <p className='text-lg font-bold text-slate-300'>
                  Project Horizon - John Smith
                </p>
              </div>
              <div className='flex flex-row items-center space-x-[2rem]'>
                <img className='h-[50px] w-[50px]' src={file.src} />
                <p className='text-lg font-bold text-slate-300'>
                  Project Horizon - John Smith
                </p>
              </div>
              <div className='flex flex-row items-center space-x-[2rem]'>
                <img className='h-[50px] w-[50px]' src={file.src} />
                <p className='text-lg font-bold text-slate-300'>
                  Project Horizon - John Smith
                </p>
              </div>
              <div className='flex flex-row items-center space-x-[2rem]'>
                <img className='h-[50px] w-[50px]' src={file.src} />
                <p className='text-lg font-bold text-slate-300'>
                  Project Horizon - John Smith
                </p>
              </div>
            </>
          )}
        </GlassWindowContents>
        <GlassWindowPane glassStyle={glassStyles['glass-5']} />
      </GlassWindowFrame>
    </ToggleContext.Provider>
  );
}
