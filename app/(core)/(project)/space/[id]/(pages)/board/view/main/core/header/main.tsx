import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import {
  
  glassFx,
} from '@/(style)/data';
import { BoardContext, BoardModalType } from '../../../../page';
import { useContext } from 'react';
import { BoardHeaderDefault } from './modes/default/main';
import { BoardHeaderIdea } from './modes/star/main';
import { BoardHeaderVisual } from './modes/visual/main';
import { BoardHeaderSound } from './modes/sound/main';
import { BoardHeaderInfo } from './modes/info/main';

export function BoardHeader() {
  const boardContext = useContext(BoardContext);
  const modalType = boardContext.modalType

  return (
    <GlassAreaContainer
      name={BoardHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      className={`flex items-center justify-between`}
      glassFx={glassFx['glass-5']}
    >
      {modalType === BoardModalType.DEFAULT && <BoardHeaderDefault/>}
      {modalType === BoardModalType.IDEA && <BoardHeaderIdea/>}
      {modalType === BoardModalType.TEXT && <BoardHeaderInfo/>}
      {modalType === BoardModalType.AUDIO && <BoardHeaderSound/>}
      {modalType === BoardModalType.VISUAL && <BoardHeaderVisual/>}
    </GlassAreaContainer>
  );
}
