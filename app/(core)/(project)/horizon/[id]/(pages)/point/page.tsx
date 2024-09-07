'use client';

import isAstralAuth from '@/utils/isAuth';
import { HorizonPointView } from './view/main';
import { HorizonPointSidebar } from './view/sidebar/main';

function Page() {
  return (
    <HorizonPointView>
      <div className='flex h-full w-full flex-col'></div>
      <HorizonPointSidebar />
    </HorizonPointView>
  );
}

export default isAstralAuth(Page);
