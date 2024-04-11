'use client';

import insideVerse from '@/(logic)/utils/isAuth';
import { RankView } from './view';
import { RankSidebar } from './(rank-epic)/sidebar/main';

function Page() {
  return (
    <>
      <RankView>
        <div className='flex h-full w-full flex-row'>
        </div>
        <RankSidebar/>
      </RankView>
    </>
  );
}

export default insideVerse(Page);
