'use client';
import isAstralAuth from '@/(utils)/isAuth';
import { VentureHorizonsView } from './view/view';

function Page() {
  return <VentureHorizonsView />;
}

export default isAstralAuth(Page);
