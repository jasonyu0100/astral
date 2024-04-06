'use client';

import insideVerses from '@/(logic)/utils/isAuth';
import { BaseView } from './view';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { borderFx, glassFx, roundedFx } from '@/(design)/(fx)/data';
import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { ProfileCover } from '@/(components)/(element)/profile/main';
import {
  exampleFile,
  exampleFiles,
} from '@/(logic)/internal/model/resource/file/main';
import { BaseSidebar } from './(link-epic)/sidebar/main';

function Page() {
  return (
    <>
      <BaseView>
        <div className='h-full flex-grow'>
          <div className='flex flex-grow flex-col space-y-[2rem]  p-[2rem]'>
            <GlassWindowFrame
              className='p-[1rem]'
              borderFx={borderFx['border-all']}
              roundedFx={roundedFx['rounded']}
            >
              <GlassWindowContents>
                <p className="text-lg font-bold text-slate-500">Make a horizon post</p>
              </GlassWindowContents>
              <GlassWindowPane glassFx={glassFx['glass-5']} />
            </GlassWindowFrame>
            <GlassWindowFrame
              className='p-[1rem]'
              borderFx={borderFx['border-all']}
              roundedFx={roundedFx['rounded']}
            >
              <GlassWindowContents>
                <div className='flex flex-row items-center space-x-[1rem]'>
                  <ProfileCover file={exampleFile} />
                  <div className='flex flex-col'>
                    <p className='font-bold text-slate-300'>John Smith</p>
                    <p className='text-slate-500'>Space XYZ</p>
                  </div>
                </div>
                <div className='space-y-[1rem] pt-[2rem]'>
                  <h1 className='text-slate-300'>Hello World</h1>
                  <h1 className='text-slate-300'>Hello World</h1>
                  <h1 className='text-slate-300'>Hello World</h1>
                  <h1 className='text-slate-300'>Hello World</h1>
                  <img
                    src={exampleFiles[2].src}
                    className='w-full max-w-[500px]'
                  />
                </div>
              </GlassWindowContents>
              <GlassWindowPane glassFx={glassFx['glass-5']} />
            </GlassWindowFrame>
            <GlassWindowFrame
              className='p-[1rem]'
              borderFx={borderFx['border-all']}
              roundedFx={roundedFx['rounded']}
            >
              <GlassWindowContents>
                <ProfileCover file={exampleFile} />
                <h1 className='text-slate-300'>Hello World</h1>
                <h1 className='text-slate-300'>Hello World</h1>
                <h1 className='text-slate-300'>Hello World</h1>
                <h1 className='text-slate-300'>Hello World</h1>
              </GlassWindowContents>
              <GlassWindowPane glassFx={glassFx['glass-5']} />
            </GlassWindowFrame>
            <GlassWindowFrame
              className='p-[1rem]'
              borderFx={borderFx['border-all']}
              roundedFx={roundedFx['rounded']}
            >
              <GlassWindowContents>
                <ProfileCover file={exampleFile} />
                <h1 className='text-slate-300'>Hello World</h1>
                <h1 className='text-slate-300'>Hello World</h1>
                <h1 className='text-slate-300'>Hello World</h1>
                <h1 className='text-slate-300'>Hello World</h1>
              </GlassWindowContents>
              <GlassWindowPane glassFx={glassFx['glass-5']} />
            </GlassWindowFrame>
          </div>
        </div>

        <BaseSidebar />
      </BaseView>
    </>
  );
}

export default insideVerses(Page);
