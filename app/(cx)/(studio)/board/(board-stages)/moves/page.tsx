'use client';

import insideVerses from '@/(logic)/utils/isAuth';
import { MovesCollection } from '../../(board-epic)/main';
import { MovesMove } from '../../(board-epic)/shelf/move/main';
import { MovesShelf } from '../../(board-epic)/shelf/main';
import { MovesHeader } from '../../(board-epic)/header/main';

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
