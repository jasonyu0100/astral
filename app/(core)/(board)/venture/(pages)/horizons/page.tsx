'use client';
import isVerseAuth from '@/(utils)/isAuth';
import { VentureHorizonsView } from './(horizons-epic)/view';

function Page() {
  return <VentureHorizonsView />;
}

export default isVerseAuth(Page);
