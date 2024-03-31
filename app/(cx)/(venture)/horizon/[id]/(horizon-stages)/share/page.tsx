'use client';

import insideVerses from '@/(logic)/utils/isAuth';
import { ShareView } from './view';
import { ShareSidebar } from './(share-epic)/sidebar/main';

function Page() {
  return (
    <>
      <ShareView>
        <div className='h-full flex-grow'></div>
        <ShareSidebar />
      </ShareView>
    </>
  );
}

export default insideVerses(Page);
