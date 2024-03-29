import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import {
  containerFx,
  glassFx,
} from '@/(design)/(fx)/data';
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
      sizeFx='h-[60px] w-full flex-shrink-0'
      className={`${containerFx['row-center']} justify-between`}
      glassFx={glassFx['glass-5']}
    >
      {modalType === DraftModalType.DEFAULT && <DraftHeaderDefault/>}
      {modalType === DraftModalType.STAR && <DraftHeaderStar/>}
      {modalType === DraftModalType.TEXT && <DraftHeaderInfo/>}
      {modalType === DraftModalType.AUDIO && <DraftHeaderSound/>}
      {modalType === DraftModalType.VISUAL && <DraftHeaderVisual/>}
    </GlassAreaContainer>
  );
}
