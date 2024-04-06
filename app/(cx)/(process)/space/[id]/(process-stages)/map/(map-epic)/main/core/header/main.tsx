import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import {
  containerFx,
  glassFx,
} from '@/(design)/(fx)/data';
import { MapContext, MapModalType } from '../../../../page';
import { useContext } from 'react';
import { MapHeaderDefault } from './modes/default/main';
import { MapHeaderStar } from './modes/star/main';
import { MapHeaderVisual } from './modes/visual/main';
import { MapHeaderSound } from './modes/sound/main';
import { MapHeaderInfo } from './modes/info/main';

export function MapHeader() {
  const mapContext = useContext(MapContext);
  const modalType = mapContext.modalType

  return (
    <GlassAreaContainer
      name={MapHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      className={`${containerFx['row-center']} justify-between`}
      glassFx={glassFx['glass-5']}
    >
      {modalType === MapModalType.DEFAULT && <MapHeaderDefault/>}
      {modalType === MapModalType.STAR && <MapHeaderStar/>}
      {modalType === MapModalType.TEXT && <MapHeaderInfo/>}
      {modalType === MapModalType.AUDIO && <MapHeaderSound/>}
      {modalType === MapModalType.VISUAL && <MapHeaderVisual/>}
    </GlassAreaContainer>
  );
}
