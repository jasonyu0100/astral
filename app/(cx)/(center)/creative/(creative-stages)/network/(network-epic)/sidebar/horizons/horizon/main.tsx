import { Divider } from '@/(pkgs)/(line)/divider/main';
import { GlassWindowContents } from '@/(pkgs)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(pkgs)/(glass)/window/main';
import { GlassWindowPane } from '@/(pkgs)/(glass)/window/pane/main';
import { HorizonCover } from '@/(pkgs)/(element)/horizon/main';
import { SpaceCover } from '@/(pkgs)/(element)/space/main';
import { borderFx, glassFx, roundedFx } from '@/(fx)/data';
import { ToggleContext } from '@/(lgx)/internal/contexts/toggle/main';
import {
  FileObj,
  exampleFile,
} from '@/(lgx)/internal/model/resource/file/main';
import { useState } from 'react';
import { Seperator } from '@/(pkgs)/(line)/seperator/main';

export function CreativeNetworkSidebarHorizon() {
  const file = exampleFile;
  const [expanded, changeExpanded] = useState(false);

  return (
    <ToggleContext.Provider
      value={{ toggled: expanded, toggle: () => changeExpanded(!expanded) }}
    >
      <GlassWindowFrame
        name={CreativeNetworkSidebarHorizon.name}
        className='min-h-[80px] w-full p-[15px]'
        roundedFx={roundedFx['rounded-sm']}
        borderFx={borderFx['border-all']}
      >
        <GlassWindowContents className='flex w-full flex-col space-y-[1rem]'>
          <div className='flex aspect-[16/9] w-full flex-col'>
            {!expanded && (
              <div className='flex w-full flex-row'>
                <p className='text-md font-bold text-slate-500'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean eget tortor turpis. Mauris tellus libero, iaculis quis
                  enim ac, porttitor fringilla justo. Proin sodales iaculis
                  dignissim.
                </p>
              </div>
            )}
            <div className='mt-auto flex flex-row  items-center justify-between'>
              <div className='flex w-full flex-row items-center space-x-[2rem]'>
                <HorizonCover file={file} />
                <div className='flex flex-col'>
                  <p className='text-lg font-bold text-slate-300'>
                    Project Horizon
                  </p>
                  <p className='text-md font-bold text-slate-400'>John Smith</p>
                </div>
              </div>
              <button
                className='h-[50px] w-[50px]'
                onClick={() => changeExpanded(!expanded)}
              >
                {expanded ? (
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
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                  >
                    <mask
                      id='mask0_3190_13'
                      maskUnits='userSpaceOnUse'
                      x='0'
                      y='0'
                      width='24'
                      height='24'
                    >
                      <rect width='24' height='24' fill='#D9D9D9' />
                    </mask>
                    <g mask='url(#mask0_3190_13)'>
                      <path
                        d='M7.4 15.375L6 13.975L12 7.97498L18 13.975L16.6 15.375L12 10.775L7.4 15.375Z'
                        fill='#CBD5E1'
                      />
                    </g>
                  </svg>
                )}
              </button>
            </div>
          </div>
          {expanded && (
            <>
              <Divider />
              <div className='flex flex-row items-center space-x-[2rem]'>
                <SpaceCover file={file} />
                <p className='text-lg font-bold text-slate-400'>
                  Project Space
                </p>
              </div>

              <div className='flex flex-row items-center space-x-[2rem]'>
                <SpaceCover file={file} />
                <p className='text-lg font-bold text-slate-300'>
                  Project Space
                </p>
              </div>
              <div className='flex flex-row items-center space-x-[2rem]'>
                <SpaceCover file={file} />
                <p className='text-lg font-bold text-slate-300'>
                  Project Space
                </p>
              </div>
              <div className='flex flex-row items-center space-x-[2rem]'>
                <SpaceCover file={file} />
                <p className='text-lg font-bold text-slate-300'>
                  Project Space
                </p>
              </div>
              <div className='flex flex-row items-center space-x-[2rem]'>
                <SpaceCover file={file} />
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
        <GlassWindowPane glassFx={glassFx['glass-5']} />
      </GlassWindowFrame>
    </ToggleContext.Provider>
  );
}
