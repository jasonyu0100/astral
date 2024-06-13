import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx, borderFx } from '@/(style)/data';
import { BoardContext, BoardModalType } from '../../../../../../../page';
import { BoardHeaderTextBoardButton } from './text/main';
import { BoardHeaderDefaultBoardButton } from './default/main';
import { BoardHeaderAudioBoardButton } from './audio/main';
import { BoardHeaderVisualBoardButton } from './visual/main';
import { useContext } from 'react';
import { ContextForTogglable } from '@/(logic)/contexts/togglable/main';

export function ToggleDropdownList() {
  const { modalType, updateModalType } = useContext(BoardContext);
  const { toggle } = useContext(ContextForTogglable);
  return (
    <div
      className={`absolute left-[-4rem] top-[4rem] z-50 flex h-[180px] w-[360px] flex-col bg-slate-900 ${modalType === BoardModalType.IDEA && 'h-[240px]'} `}
      onMouseLeave={() => toggle()}
    >
      <GlassAreaContainer
        name={ToggleDropdownList.name}
        sizeFx={'w-full h-full'}
        glassFx={glassFx['glass-5']}
        className='flex flex-col items-center justify-center'
      >
        {modalType !== BoardModalType.DEFAULT && (
          <BoardHeaderDefaultBoardButton
            onClick={() => updateModalType(BoardModalType.DEFAULT)}
          />
        )}
        {modalType !== BoardModalType.AUDIO && (
          <BoardHeaderAudioBoardButton
            onClick={() => updateModalType(BoardModalType.AUDIO)}
          />
        )}
        {modalType !== BoardModalType.VISUAL && (
          <BoardHeaderVisualBoardButton
            onClick={() => updateModalType(BoardModalType.VISUAL)}
          />
        )}
        {modalType !== BoardModalType.TEXT && (
          <BoardHeaderTextBoardButton
            onClick={() => updateModalType(BoardModalType.TEXT)}
          />
        )}
      </GlassAreaContainer>
    </div>
  );
}
