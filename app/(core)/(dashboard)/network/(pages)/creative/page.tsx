'use client';
import isVerseAuth from '@/(utils)/isAuth';
import { CreativeNetworkView } from './view/view';

function Page() {
  return <CreativeNetworkView />;
}

export default isVerseAuth(Page);
