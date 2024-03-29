'use client';
import insideVerses from '@/(logic)/utils/isAuth';
import { ShareView } from './(share-epic)/view';

function Page() {
  return <ShareView />;
}

export default insideVerses(Page);
