'use client';
import isVerseAuth from '@/(utils)/isAuth';
import { CreativeNetworkView } from './(network-epic)/view';

function Page() {
  return <CreativeNetworkView />;
}

export default isVerseAuth(Page);
