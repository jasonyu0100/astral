import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassStyles, borderStyles } from '@/(design)/(styles)/data';
import { DraftContext, DraftModalType } from '../../../../../../../page';
import { DraftHeaderTextBoardButton } from './text/main';
import { DraftHeaderDefaultBoardButton } from './default/main';
import { DraftHeaderAudioBoardButton } from './audio/main';
import { DraftHeaderVisualBoardButton } from './visual/main';
import { useContext } from 'react';
import { ToggleContext } from '@/(logic)/internal/contexts/toggle/main';

export function ToggleDropdownList() {
  const { modalType, updateModalType } = useContext(DraftContext);
  const { toggle } = useContext(ToggleContext);
  return (
    <div
      className={`absolute left-[-60px] top-[60px] z-50 flex h-[180px] w-[360px] flex-col bg-slate-900 ${modalType === DraftModalType.STAR && 'h-[240px]'} `}
      onMouseLeave={() => toggle()}
    >
      <GlassAreaContainer
        name={ToggleDropdownList.name}
        size={'w-full h-full'}
        glass={glassStyles['glass-10']}
        className='flex flex-col items-center justify-center'
      >
        {modalType !== DraftModalType.DEFAULT && (
          <DraftHeaderDefaultBoardButton
            onClick={() => updateModalType(DraftModalType.DEFAULT)}
          />
        )}
        {modalType !== DraftModalType.AUDIO && (
          <DraftHeaderAudioBoardButton
            onClick={() => updateModalType(DraftModalType.AUDIO)}
          />
        )}
        {modalType !== DraftModalType.VISUAL && (
          <DraftHeaderVisualBoardButton
            onClick={() => updateModalType(DraftModalType.VISUAL)}
          />
        )}
        {modalType !== DraftModalType.TEXT && (
          <DraftHeaderTextBoardButton
            onClick={() => updateModalType(DraftModalType.TEXT)}
          />
        )}
      </GlassAreaContainer>
    </div>
  );
}
