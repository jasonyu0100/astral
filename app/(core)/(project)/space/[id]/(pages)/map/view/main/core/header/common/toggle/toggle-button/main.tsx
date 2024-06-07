import { useContext } from 'react';
import { MapContext, MapModalType } from '../../../../../../../page';
import { SoundIcon } from '../../icons/sound/main';
import { VisualIcon } from '../../icons/visual/main';
import { ContextForTogglable } from '@/(logic)/contexts/togglable/main';
import { NetworkIcon } from '../../icons/network/main';
import { InfoIcon } from '../../icons/info/main';
import { StarIcon } from '../../icons/star/main';
import { WrapperTooltip } from '@/(components)/(basic)/tooltip/main';
import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassFx } from '@/(style)/data';

export function ToggleButton() {
  const { toggle } = useContext(ContextForTogglable);
  const { modalType } = useContext(MapContext);
  return (
    <WrapperTooltip text={modalType}>
      <GlassAreaContainer
        name={ToggleButton.name}
        sizeFx={'w-[4rem] h-[4rem]'}
        glassFx={glassFx['glass-5']}
        className='flex animate-pulse-slow cursor-pointer flex-col items-center justify-center'
        onClick={() => toggle()}
      >
        {modalType === MapModalType.IDEA && <StarIcon />}
        {modalType === MapModalType.DEFAULT && <NetworkIcon />}
        {modalType === MapModalType.AUDIO && <SoundIcon />}
        {modalType === MapModalType.VISUAL && <VisualIcon />}
        {modalType === MapModalType.TEXT && <InfoIcon />}
      </GlassAreaContainer>
    </WrapperTooltip>
  );
}
