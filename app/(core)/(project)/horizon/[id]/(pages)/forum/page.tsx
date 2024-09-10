'use client';

import protectedUnderAstralAuth from '@/utils/isAuth';
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

export default protectedUnderAstralAuth(Page);
