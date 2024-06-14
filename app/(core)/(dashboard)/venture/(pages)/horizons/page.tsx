'use client';
import isVerseAuth from '@/(utils)/isAuth';
import { VentureHorizonsView } from './view/view';

function Page() {
  return <VentureHorizonsView />;
}

export default isVerseAuth(Page);
