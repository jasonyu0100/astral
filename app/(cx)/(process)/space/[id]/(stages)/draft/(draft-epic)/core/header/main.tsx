import { Glass } from '@/(components)/glass/main';
import {
  containerStyles,
  borderStyles,
  backgroundStyles,
} from '@/(components)/styles/data';
import { DraftContext, DraftModalType } from '../../../page';
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
    <Glass
      displayName={DraftHeader.name}
      sizeStyle='h-[60px] w-full flex-shrink-0'
      className={`${containerStyles['row-center']} justify-between`}
      borderStyle={borderStyles['border-b']}
      backgroundStyle={backgroundStyles['glass-5']}
    >
      {modalType === DraftModalType.DEFAULT && <DraftHeaderDefault/>}
      {modalType === DraftModalType.STAR && <DraftHeaderStar/>}
      {modalType === DraftModalType.INFO && <DraftHeaderInfo/>}
      {modalType === DraftModalType.SOUND && <DraftHeaderSound/>}
      {modalType === DraftModalType.VISUAL && <DraftHeaderVisual/>}
    </Glass>
  );
}
