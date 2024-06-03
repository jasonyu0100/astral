'use client';
import isVerseAuth from '@/(utils)/isAuth';
import { HorizonsView } from './view/view';

function Page() {
  return <HorizonsView />;
}

export default isVerseAuth(Page);
