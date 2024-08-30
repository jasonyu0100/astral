'use client';

import { spaceMap } from '@/(core)/(project)/space/[id]/map';
import {
  exampleFileElem,
  exampleFileElems,
} from '@/(server)/model/elements/file/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { UserDpElement } from '@/ui/element/user/main';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import isAstralAuth from '@/utils/isAuth';
import { horizonMap } from '../../map';
import { HorizonAreaView } from './view/main';
import { HorizonAreaSidebar } from './view/sidebar/main';

function Page() {
  return (
    <HorizonAreaView>
      <div className='h-full flex-grow'>
        <div className='h-full w-full overflow-auto'>
          <div className='flex flex-grow flex-col items-center space-y-[2rem] p-[2rem]'>
            <GlassWindowFrame
              className='w-full'
              borderFx={borderFx['border-around']}
              roundedFx={roundedFx['rounded']}
            >
              <GlassWindowContents>
                <div className='p-[1rem]'>
                  <p className='text-lg font-bold text-slate-500'>
                    Make a horizon post
                  </p>
                  <p className='font-bold text-slate-500'>25/5/2022</p>
                </div>
                <div className='h-[15rem] w-full rounded bg-slate-700 bg-opacity-30' />
              </GlassWindowContents>
              <GlassWindowPane glassFx={glassFx['glass-5']} />
            </GlassWindowFrame>
            <div className='h-[1rem] w-[1rem] rounded-full bg-slate-500 bg-opacity-30' />
            <GlassWindowFrame
              className='w-full p-[1rem]'
              borderFx={borderFx['border-around']}
              roundedFx={roundedFx['rounded']}
            >
              <GlassWindowContents>
                <div className='flex flex-row items-center space-x-[1rem]'>
                  <UserDpElement fileElem={exampleFileElem} />
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
                    src={exampleFileElems[2].src}
                    className='w-full max-w-[360px]'
                  />
                  <p className='text-xs font-bold text-slate-500'>
                    <a href={horizonMap.horizon.id.area.link('0')}>
                      Horizon XYZ
                    </a>
                    {'>'}
                    <a href={spaceMap.space.id.chat.link('0')}>Space XYZ</a>
                  </p>
                </div>
              </GlassWindowContents>
              <GlassWindowPane glassFx={glassFx['glass-5']} />
            </GlassWindowFrame>
            <GlassWindowFrame
              className='w-full p-[1rem]'
              borderFx={borderFx['border-around']}
              roundedFx={roundedFx['rounded']}
            >
              <GlassWindowContents>
                <div className='flex flex-row items-center space-x-[1rem]'>
                  <UserDpElement fileElem={exampleFileElem} />
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
                    src={exampleFileElems[2].src}
                    className='w-full max-w-[360px]'
                  />
                  <p className='text-xs font-bold text-slate-500'>
                    <a href={horizonMap.horizon.id.area.link('0')}>
                      Horizon XYZ
                    </a>
                    {'>'}
                    <a href={spaceMap.space.id.chat.link('0')}>Space XYZ</a>
                  </p>
                </div>
              </GlassWindowContents>
              <GlassWindowPane glassFx={glassFx['glass-5']} />
            </GlassWindowFrame>
          </div>
        </div>
      </div>
      <HorizonAreaSidebar />
    </HorizonAreaView>
  );
}

export default isAstralAuth(Page);
