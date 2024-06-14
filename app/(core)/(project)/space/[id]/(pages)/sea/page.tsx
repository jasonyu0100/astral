'use client';
import isVerseAuth from '@/(utils)/isAuth';
import { SpaceSeaShareView } from './view/view';

function Page() {
  return <SpaceSeaShareView />;
}

export default isVerseAuth(Page);
