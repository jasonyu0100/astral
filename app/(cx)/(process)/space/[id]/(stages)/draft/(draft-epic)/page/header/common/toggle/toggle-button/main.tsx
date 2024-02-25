import { NetworkIcon, InfoIcon } from 'lucide-react';
import { useContext } from 'react';
import { DraftContext, DraftModalType } from '../../../../../../page';
import { SoundIcon } from '../../icons/sound/main';
import { VisualIcon } from '../../icons/visual/main';
import { ToggleContext } from '@/(logic)/internal/contexts/toggle/main';

export function ToggleButton() {
  const { toggle } = useContext(ToggleContext);
  const { modalType } = useContext(DraftContext);
  return (
    <button
      className={
        'flex h-[60px] w-[60px] flex-col items-center justify-center border-r  border-slate-500 border-opacity-30'
      }
      onClick={() => toggle()}
    >
      {modalType === DraftModalType.DEFAULT && <NetworkIcon />}
      {modalType === DraftModalType.SOUND && <SoundIcon />}
      {modalType === DraftModalType.VISUAL && <VisualIcon />}
      {modalType === DraftModalType.INFO && <InfoIcon />}
    </button>
  );
}
