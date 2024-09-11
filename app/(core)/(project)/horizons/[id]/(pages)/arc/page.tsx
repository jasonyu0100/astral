'use client';

import protectedUnderAstralAuth from '@/utils/isAuth';
import { HorizonArcView } from './view/main';
import { HorizonArcSidebar } from './view/sidebar/main';

function Page() {
  return (
    <HorizonArcView>
      <div className='h-full flex-grow p-[2rem]'>
        <p className='font-bold text-slate-300'>Title - History</p>
        <p className='font-bold text-slate-300'>Algo - LLM</p>
      </div>
      <HorizonArcSidebar />
    </HorizonArcView>
  );
}

export default protectedUnderAstralAuth(Page);
