'use client';

import protectedUnderAstralAuth from '@/utils/isAuth';
import { HorizonPointView } from './view/main';
import { HorizonPointSidebar } from './view/sidebar/main';

function Page() {
  return (
    <HorizonPointView>
      <div className='h-full flex-grow p-[2rem]'>
        <p className='font-bold text-slate-300'>Title - Consensus</p>
        <p className='font-bold text-slate-300'>Algo - Trial and Error</p>
        {/* What is the point? */}
      </div>
      <HorizonPointSidebar />
    </HorizonPointView>
  );
}

export default protectedUnderAstralAuth(Page);
