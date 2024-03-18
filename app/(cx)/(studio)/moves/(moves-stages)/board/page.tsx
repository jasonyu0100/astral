'use client';

import insideVerses from '@/(logic)/utils/isAuth';
import { MovesCollection } from '../../(moves-epic)/main';
import { MovesMove } from '../../(moves-epic)/shelf/move/main';
import { MovesShelf } from '../../(moves-epic)/shelf/main';
import { MovesHeader } from '../../(moves-epic)/header/main';

function Page() {
  return (
    <>
      <MovesCollection>
        <MovesHeader />
        <MovesShelf>
          <MovesMove />
          <MovesMove />
          <MovesMove />
        </MovesShelf>
        <MovesShelf>
          <MovesMove />
          <MovesMove />
          <MovesMove />
        </MovesShelf>
      </MovesCollection>
    </>
  );
}

export default insideVerses(Page);
