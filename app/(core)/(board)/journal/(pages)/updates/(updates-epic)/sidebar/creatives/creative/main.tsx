import { ProfileCover } from '@/(components)/(element)/profile/main';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { Divider } from '@/(components)/(line)/divider/main';
import { glassFx, borderFx, roundedFx } from '@/(style)/data';
import { ToggleContext } from '@/(logic)/internal/contexts/toggle/main';
import { exampleFile } from '@/(types)/model/resource/file/main';
import { useState } from 'react';

export function JouranlUpdatesSidebarCreative() {
  const [expanded, changeExpanded] = useState(false);
  return (
    <ToggleContext.Provider
      value={{ toggled: expanded, toggle: () => changeExpanded(!expanded) }}
    >
      <GlassWindowFrame
        name={JouranlUpdatesSidebarCreative.name}
        className='w-full p-[1rem]'
        borderFx={borderFx['border-all']}
        roundedFx={roundedFx['rounded-sm']}
      >
        <GlassWindowPane glassFx={glassFx['glass-5']} />
        <GlassWindowContents className='flex flex-col'>
          <div className='flex w-full flex-row justify-between'>
            <div className='flex flex-row items-center space-x-[1rem]'>
              <ProfileCover file={exampleFile} />
              <p className='font-bold text-slate-300'>John Smith</p>
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
          {expanded && (
            <div className='flex flex-col pt-[2rem]'>
              <Divider />
              <div className='flex flex-col space-y-[1rem] pt-[2rem]'>
                <div className='flex flex-row items-center space-x-[1rem]'>
                  <ProfileCover file={exampleFile} />
                  <p className='font-bold text-slate-300'>Space</p>
                </div>
                <div className='flex flex-row items-center space-x-[1rem]'>
                  <ProfileCover file={exampleFile} />
                  <p className='font-bold text-slate-300'>Space</p>
                </div>
              </div>
            </div>
          )}
        </GlassWindowContents>
      </GlassWindowFrame>
    </ToggleContext.Provider>
  );
}
