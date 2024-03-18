'use client';
import insideVerses from '@/(logic)/utils/isAuth';
import { ShareView } from './view';

function Page() {
  return <ShareView />;
}

export default insideVerses(Page);
