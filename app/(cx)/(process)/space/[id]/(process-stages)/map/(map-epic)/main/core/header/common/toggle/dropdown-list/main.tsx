import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx, borderFx } from '@/(design)/(fx)/data';
import { MapContext, MapModalType } from '../../../../../../../page';
import { MapHeaderTextBoardButton } from './text/main';
import { MapHeaderDefaultBoardButton } from './default/main';
import { MapHeaderAudioBoardButton } from './audio/main';
import { MapHeaderVisualBoardButton } from './visual/main';
import { useContext } from 'react';
import { ToggleContext } from '@/(logic)/internal/contexts/toggle/main';

export function ToggleDropdownList() {
  const { modalType, updateModalType } = useContext(MapContext);
  const { toggle } = useContext(ToggleContext);
  return (
    <div
      className={`absolute left-[-4rem] top-[4rem] z-50 flex h-[180px] w-[360px] flex-col bg-slate-900 ${modalType === MapModalType.STAR && 'h-[240px]'} `}
      onMouseLeave={() => toggle()}
    >
      <GlassAreaContainer
        name={ToggleDropdownList.name}
        sizeFx={'w-full h-full'}
        glassFx={glassFx['glass-10']}
        className='flex flex-col items-center justify-center'
      >
        {modalType !== MapModalType.DEFAULT && (
          <MapHeaderDefaultBoardButton
            onClick={() => updateModalType(MapModalType.DEFAULT)}
          />
        )}
        {modalType !== MapModalType.AUDIO && (
          <MapHeaderAudioBoardButton
            onClick={() => updateModalType(MapModalType.AUDIO)}
          />
        )}
        {modalType !== MapModalType.VISUAL && (
          <MapHeaderVisualBoardButton
            onClick={() => updateModalType(MapModalType.VISUAL)}
          />
        )}
        {modalType !== MapModalType.TEXT && (
          <MapHeaderTextBoardButton
            onClick={() => updateModalType(MapModalType.TEXT)}
          />
        )}
      </GlassAreaContainer>
    </div>
  );
}
