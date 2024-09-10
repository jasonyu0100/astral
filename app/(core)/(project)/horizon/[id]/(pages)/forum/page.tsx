'use client';

import protectedUnderAstralAuth from '@/utils/isAuth';
import { HorizonForumView } from './view/main';
import { HorizonForumSidebar } from './view/sidebar/main';

function Page() {
  return (
    <HorizonForumView>
      <div className='h-full flex-grow p-[2rem]'>
        <p className='font-bold text-slate-300'>Title - Karma</p>
        <p className='font-bold text-slate-300'>Algo - Sort</p>
      </div>
      <HorizonForumSidebar />
    </HorizonForumView>
  );
}

export default protectedUnderAstralAuth(Page);
