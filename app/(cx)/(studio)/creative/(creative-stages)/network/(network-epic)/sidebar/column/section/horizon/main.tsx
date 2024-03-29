import { Divider } from '@/(components)/(basic)/divider/main';
import { GlassWindowContents } from '@/(components)/(basic)/glass/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(basic)/glass/window/main';
import { GlassWindowPane } from '@/(components)/(basic)/glass/window/pane/main';
import { HorizonCover } from '@/(components)/(basic)/cover/horizon/main';
import { SpaceCover } from '@/(components)/(basic)/cover/space/main';
import {
  borderStyles,
  glassStyles,
  roundedStyles,
} from '@/(design)/(styles)/data';
import { ToggleContext } from '@/(logic)/internal/contexts/toggle/main';
import {
  FileObj,
  exampleFile,
} from '@/(logic)/internal/model/resource/file/main';
import { useState } from 'react';
import { Seperator } from '@/(components)/(basic)/seperator/main';

export function SidebarNetworkHorizon() {
  const file = exampleFile;
  const [expanded, changeExpanded] = useState(false);

  return (
    <ToggleContext.Provider
      value={{ toggled: expanded, toggle: () => changeExpanded(!expanded) }}
    >
      <GlassWindowFrame
        name={SidebarNetworkHorizon.name}
        className='min-h-[80px] w-full p-[15px]'
        rounded={roundedStyles['rounded-sm']}
        border={borderStyles['border-all']}
      >
        <GlassWindowContents className='flex w-full flex-col space-y-[1rem]'>
          <div className='flex w-full flex-row items-center space-x-[2rem]'>
            <HorizonCover file={file} />
            <div className='flex flex-col'>
              <p className='text-xl font-bold text-slate-300'>
                Project Horizon
              </p>
              <p className='text-md text-slate-300'>John Smith</p>
            </div>
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
              <Divider />
              <div className='flex flex-row items-center space-x-[1rem]'>
                <SpaceCover file={file} />
                <Seperator className='w-[3rem]' />
                <p className='text-lg font-bold text-slate-300'>
                  Project Space
                </p>
              </div>

              <div className='flex flex-row items-center space-x-[1rem]'>
                <SpaceCover file={file} />
                <Seperator />
                <p className='text-lg font-bold text-slate-300'>
                  Project Space
                </p>
              </div>
              <div className='flex flex-row items-center space-x-[1rem]'>
                <SpaceCover file={file} />
                <Seperator />
                <p className='text-lg font-bold text-slate-300'>
                  Project Space
                </p>
              </div>
              <div className='flex flex-row items-center space-x-[1rem]'>
                <SpaceCover file={file} />
                <Seperator />
                <p className='text-lg font-bold text-slate-300'>
                  Project Space
                </p>
              </div>
              <div className='flex flex-row items-center space-x-[1rem]'>
                <SpaceCover file={file} />
                <Seperator />
                <p className='text-lg font-bold text-slate-300'>
                  Project Space
                </p>
              </div>

              <div className='flex flex-row items-center space-x-[2rem]'>
                <SpaceCover file={{} as FileObj} />
                <p className='text-lg font-bold text-slate-300'>New Space +</p>
              </div>
            </>
          )}
        </GlassWindowContents>
        <GlassWindowPane glass={glassStyles['glass-5']} />
      </GlassWindowFrame>
    </ToggleContext.Provider>
  );
}
