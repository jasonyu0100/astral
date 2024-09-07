'use client';

import isAstralAuth from '@/utils/isAuth';
import { HorizonForumView } from './view/main';
import { HorizonForumSidebar } from './view/sidebar/main';

function Page() {
  return (
    <HorizonForumView>
      <div className='h-full flex-grow'></div>
      <HorizonForumSidebar />
    </HorizonForumView>
  );
}

export default isAstralAuth(Page);
