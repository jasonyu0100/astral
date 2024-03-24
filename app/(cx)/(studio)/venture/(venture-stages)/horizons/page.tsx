'use client';

import insideVerses from '@/(logic)/utils/isAuth';
import { VentureCollection } from '../../(venture-epic)/main';
import { Horizon } from '../../(venture-epic)/shelf/move/main';
import { VentureShelf } from '../../(venture-epic)/shelf/main';
import { VentureHeader } from '../../(venture-epic)/header/main';

function Page() {
  return (
    <>
      <VentureCollection>
        <VentureHeader />
        <VentureShelf>
          <Horizon />
          <Horizon />
          <Horizon />
        </VentureShelf>
        <VentureShelf>
          <Horizon />
          <Horizon />
          <Horizon />
        </VentureShelf>
      </VentureCollection>
    </>
  );
}

export default insideVerses(Page);
