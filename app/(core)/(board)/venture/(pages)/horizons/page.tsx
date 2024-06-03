'use client';
import isVerseAuth from '@/(utils)/isAuth';
import { HorizonsView } from '../../(horizons-epic)/view';

function Page() {
  return <HorizonsView />;
}

export default isVerseAuth(Page);
