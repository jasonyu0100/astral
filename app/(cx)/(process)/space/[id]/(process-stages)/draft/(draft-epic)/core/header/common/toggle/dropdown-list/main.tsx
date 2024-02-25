import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { backgroundStyles, borderStyles } from '@/(design)/(styles)/data';
import { DraftContext, DraftModalType } from '../../../../../../page';
import { DraftHeaderInfoBoardButton } from './info/main';
import { DraftHeaderNetworkBoardButton } from './network/main';
import { DraftHeaderSoundBoardButton } from './sound/main';
import { DraftHeaderVisualBoardButton } from './visual/main';
import { useContext } from 'react';
import { ToggleContext } from '@/(logic)/internal/contexts/toggle/main';

export function ToggleDropdownList() {
  const { modalType, updateModalType } = useContext(DraftContext);
  const { toggle } = useContext(ToggleContext);
  return (
    <div
      className={`absolute top-[60px] z-50 flex h-[180px] ${modalType === DraftModalType.STAR && "h-[240px]"} w-[360px] flex-col bg-slate-900`}
      onMouseLeave={() => toggle()}
    >
      <GlassContainer
        displayName={ToggleDropdownList.name}
        sizeStyle={'w-full h-full'}
        className='flex flex-col justify-center'
        glassStyle={backgroundStyles['glass-10']}
        borderStyle={borderStyles['border-all']}
      >
        {modalType !== DraftModalType.DEFAULT && (
          <DraftHeaderNetworkBoardButton
            onClick={() => updateModalType(DraftModalType.DEFAULT)}
          />
        )}
        {modalType !== DraftModalType.SOUND && (
          <DraftHeaderSoundBoardButton
            onClick={() => updateModalType(DraftModalType.SOUND)}
          />
        )}
        {modalType !== DraftModalType.VISUAL && (
          <DraftHeaderVisualBoardButton
            onClick={() => updateModalType(DraftModalType.VISUAL)}
          />
        )}
        {modalType !== DraftModalType.INFO && (
          <DraftHeaderInfoBoardButton
            onClick={() => updateModalType(DraftModalType.INFO)}
          />
        )}
      </GlassContainer>
    </div>
  );
}
