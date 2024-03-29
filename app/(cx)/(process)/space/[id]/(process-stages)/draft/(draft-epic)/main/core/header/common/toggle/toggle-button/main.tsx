import { useContext } from 'react';
import { DraftContext, DraftModalType } from '../../../../../../../page';
import { SoundIcon } from '../../icons/sound/main';
import { VisualIcon } from '../../icons/visual/main';
import { ToggleContext } from '@/(logic)/internal/contexts/toggle/main';
import { NetworkIcon } from '../../icons/network/main';
import { InfoIcon } from '../../icons/info/main';
import { StarIcon } from '../../icons/star/main';
import { WrapperTooltip } from '@/(components)/(basic)/tooltip/main';
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassStyles } from '@/(design)/(styles)/data';

export function ToggleButton() {
  const { toggle } = useContext(ToggleContext);
  const { modalType } = useContext(DraftContext);
  return (
    <WrapperTooltip text={modalType}>
      <GlassAreaContainer
        name={ToggleButton.name}
        size={'w-[60px] h-[60px]'}
        glass={glassStyles['glass-5']}
        className='flex animate-pulse-slow cursor-pointer flex-col items-center justify-center'
        onClick={() => toggle()}
      >
        {modalType === DraftModalType.STAR && <StarIcon />}
        {modalType === DraftModalType.DEFAULT && <NetworkIcon />}
        {modalType === DraftModalType.AUDIO && <SoundIcon />}
        {modalType === DraftModalType.VISUAL && <VisualIcon />}
        {modalType === DraftModalType.TEXT && <InfoIcon />}
      </GlassAreaContainer>
    </WrapperTooltip>
  );
}
