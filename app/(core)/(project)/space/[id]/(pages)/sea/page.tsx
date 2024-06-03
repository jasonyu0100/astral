'use client';
import isVerseAuth from '@/(utils)/isAuth';
import { ShareView } from './view/view';

function Page() {
  return <ShareView />;
}

export default isVerseAuth(Page);
