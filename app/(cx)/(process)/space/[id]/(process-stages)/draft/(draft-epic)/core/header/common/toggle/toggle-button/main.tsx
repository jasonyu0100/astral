import { useContext } from 'react';
import { DraftContext, DraftModalType } from '../../../../../../page';
import { SoundIcon } from '../../icons/sound/main';
import { VisualIcon } from '../../icons/visual/main';
import { ToggleContext } from '@/(logic)/internal/contexts/toggle/main';
import { NetworkIcon } from '../../icons/network/main';
import { InfoIcon } from '../../icons/info/main';
import { StarIcon } from '../../icons/star/main';
import { WrapperTooltip } from '@/(components)/(basic)/tooltip/main';

export function ToggleButton() {
  const { toggle } = useContext(ToggleContext);
  const { modalType } = useContext(DraftContext);
  return (
    <WrapperTooltip text={modalType}>
      <button
        className={
          'flex h-[60px] w-[60px] flex-col items-center justify-center border-r  border-slate-500 border-opacity-30'
        }
        onClick={() => toggle()}
      >
        {modalType === DraftModalType.STAR && <StarIcon />}
        {modalType === DraftModalType.DEFAULT && <NetworkIcon />}
        {modalType === DraftModalType.SOUND && <SoundIcon />}
        {modalType === DraftModalType.VISUAL && <VisualIcon />}
        {modalType === DraftModalType.INFO && <InfoIcon />}
      </button>
    </WrapperTooltip>
  );
}
