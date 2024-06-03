'use client';
import isVerseAuth from '@/(utils)/isAuth';
import { NetworkView } from './view/view';

function Page() {
  return <NetworkView />;
}

export default isVerseAuth(Page);
