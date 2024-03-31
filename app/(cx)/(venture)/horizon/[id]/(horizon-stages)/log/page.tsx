'use client';

import insideVerses from '@/(logic)/utils/isAuth';
import { LogView } from './view';
import { ProfileCover } from '@/(components)/(element)/profile/main';
import { exampleFile } from '@/(logic)/internal/model/resource/file/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { borderFx, glassFx, roundedFx } from '@/(design)/(fx)/data';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { LogSidebar } from './(log-epic)/sidebar/main';

function Page() {
  return (
    <>
      <LogView>
        <div className='flex h-full w-full flex-row'>
          <div className='flex flex-grow flex-col' style={{ height: '100%' }}>
            <div style={{ height: '100%' }}></div>
            <div className='flex h-[300px] flex-row space-x-[1rem]'>
              <GlassWindowFrame borderFx={borderFx['border-all']} className="p-[2rem]" roundedFx={roundedFx.rounded}>
                <GlassWindowContents className='flex flex-col'>
                  <div className='flex flex-row space-x-[1rem]'>
                    <ProfileCover
                      file={exampleFile}
                      coverFx='border-[3px] border-purple-500'
                    />
                    <ProfileCover
                      file={exampleFile}
                      coverFx='border-[3px] border-blue-500'
                    />
                  </div>
                  <p className='font-slate-300 text-lg'>Space</p>
                </GlassWindowContents>
                <GlassWindowPane glassFx={glassFx['glass-5']} />
              </GlassWindowFrame>
              <GlassWindowFrame borderFx={borderFx['border-all']} className="p-[2rem]" roundedFx={roundedFx.rounded}>
                <GlassWindowContents className='flex flex-col'>
                  <div className='flex flex-row space-x-[1rem]'>
                    <ProfileCover
                      file={exampleFile}
                      coverFx='border-[3px] border-purple-500'
                    />
                    <ProfileCover
                      file={exampleFile}
                      coverFx='border-[3px] border-blue-500'
                    />
                  </div>
                  <p className='font-slate-300 text-lg'>Space</p>
                </GlassWindowContents>
                <GlassWindowPane glassFx={glassFx['glass-5']} />
              </GlassWindowFrame>
            </div>
          </div>
          <div className='w-[500px] ' style={{ height: '100%' }}></div>
        </div>
        <LogSidebar/>
      </LogView>
    </>
  );
}

export default insideVerses(Page);
