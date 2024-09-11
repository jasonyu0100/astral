'use client';

import protectedUnderAstralAuth from '@/utils/isAuth';
import {
  ContextForHorizonsArc,
  useControllerForHorizonsArc,
} from './controller/main';
import { HorizonArcView } from './view/main';

function Page() {
  return (
    <HorizonsArcWrapper>
      <HorizonArcView />
    </HorizonsArcWrapper>
  );
}

function HorizonsArcWrapper({ children }: { children: React.ReactNode }) {
  const horizonArcsController = useControllerForHorizonsArc();

  return (
    <ContextForHorizonsArc.Provider value={horizonArcsController}>
      {children}
    </ContextForHorizonsArc.Provider>
  );
}

export default protectedUnderAstralAuth(Page);
