'use client';

import insideVerses from '@/(logic)/utils/isAuth';
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { borderFx, glassFx, roundedFx } from '@/(design)/(fx)/data';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { Divider } from '@/(components)/(line)/divider/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { VentureHorizonsContainer } from './container/main';
import { HorizonsListContainer } from './main/core/horizons/main';
import { HorizonsHeader } from './main/header/main';
import { HorizonsSidebar } from './main/core/sidebar/main';
import { HorizonsCore } from './main/core/main';
import { HorizonsMain } from './main/main';

export function VentureHorizonsView() {
  return (
    <VentureHorizonsContainer>
      <HorizonsHeader />
      <HorizonsMain />
    </VentureHorizonsContainer>
  );
}
