'use client';
import isVerseAuth from '@/(utils)/isAuth';
import { NetworkView } from './(network-epic)/view';

function Page() {
  return <NetworkView />;
}

export default isVerseAuth(Page);
