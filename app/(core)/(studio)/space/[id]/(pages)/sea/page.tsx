'use client';
import isVerseAuth from '@/(utils)/isAuth';
import { ShareView } from './(sea-epic)/view';

function Page() {
  return <ShareView />;
}

export default isVerseAuth(Page);
