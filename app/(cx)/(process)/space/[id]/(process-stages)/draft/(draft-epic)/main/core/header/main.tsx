import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import {
  containerStyles,
  glassStyles,
} from '@/(design)/(styles)/data';
import { DraftContext, DraftModalType } from '../../../../page';
import { useContext } from 'react';
import { DraftHeaderDefault } from './modes/default/main';
import { DraftHeaderStar } from './modes/star/main';
import { DraftHeaderVisual } from './modes/visual/main';
import { DraftHeaderSound } from './modes/sound/main';
import { DraftHeaderInfo } from './modes/info/main';

export function DraftHeader() {
  const draftContext = useContext(DraftContext);
  const modalType = draftContext.modalType

  return (
    <GlassAreaContainer
      name={DraftHeader.name}
      size='h-[60px] w-full flex-shrink-0'
      className={`${containerStyles['row-center']} justify-between`}
      glass={glassStyles['glass-5']}
    >
      {modalType === DraftModalType.DEFAULT && <DraftHeaderDefault/>}
      {modalType === DraftModalType.STAR && <DraftHeaderStar/>}
      {modalType === DraftModalType.TEXT && <DraftHeaderInfo/>}
      {modalType === DraftModalType.AUDIO && <DraftHeaderSound/>}
      {modalType === DraftModalType.VISUAL && <DraftHeaderVisual/>}
    </GlassAreaContainer>
  );
}
