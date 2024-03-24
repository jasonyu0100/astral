'use client';

import insideVerses from '@/(logic)/utils/isAuth';
import { VentureCollection } from '../../(venture-epic)/main';
import { Cluster } from '../../(venture-epic)/shelf/move/main';
import { VentureShelf } from '../../(venture-epic)/shelf/main';
import { VentureHeader } from '../../(venture-epic)/header/main';

function Page() {
  return (
    <>
      <VentureCollection>
        <VentureHeader />
        <VentureShelf>
          <Cluster />
          <Cluster />
          <Cluster />
        </VentureShelf>
        <VentureShelf>
          <Cluster />
          <Cluster />
          <Cluster />
        </VentureShelf>
      </VentureCollection>
    </>
  );
}

export default insideVerses(Page);
