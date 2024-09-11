'use client';

import { AstralSendIcon } from '@/icons/send/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import protectedUnderAstralAuth from '@/utils/isAuth';
import { HorizonForumView } from './view/main';
import { HorizonForumSidebar } from './view/sidebar/main';

function Page() {
  return (
    <HorizonForumView>
      <div className='h-full flex-grow'>
        <div className='flex h-[8rem] w-full flex-row items-center justify-between space-x-[2rem] p-[2rem] shadow-glow'>
          <GlassWindowFrame
            className='h-[4rem] w-full'
            roundedFx={roundedFx['rounded-full']}
            borderFx={borderFx['border-around']}
          >
            <GlassWindowContents className='flex items-center justify-center'>
              <input
                className='h-full w-full bg-transparent px-[2rem] text-slate-300'
                placeholder='Search...'
              />
            </GlassWindowContents>
            <GlassWindowPane glassFx={glassFx['glass-5']} />
          </GlassWindowFrame>
          <div className='flex h-[3rem] w-[3rem] flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-blue-500'>
            <AstralSendIcon />
          </div>
        </div>
      </div>
      <HorizonForumSidebar />
    </HorizonForumView>
  );
}

export default protectedUnderAstralAuth(Page);
