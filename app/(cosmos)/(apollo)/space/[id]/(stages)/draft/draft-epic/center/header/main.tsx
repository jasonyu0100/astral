import { Layer } from '@/(common)/layer/main';
import {
  containerStyles,
  borderStyles,
  backgroundStyles,
} from '@/(common)/styles/data';
import { DraftHeaderAddButton } from './add/main';
import { DraftHeaderSaveButton } from './left/list/main';
import DraftHeaderTitle from './title/main';
import { DraftHeaderLeft } from './left/main';
import { DraftHeaderRight } from './right/main';
import { useContext } from 'react';
import { DraftContext } from '../../../page';
import { DraftModalContext } from '../../modal/main';
import { DraftHeaderCenter } from './center/main';

export function DraftHeader() {
  const { chapter, constellation, starHandler } = useContext(DraftContext);
  const headerTitle =
    constellation && chapter
      ? `${constellation.title} - ${chapter.title}`
      : 'None';
  const { addConstellation } = useContext(DraftModalContext);

  return (
    <Layer
      displayName={DraftHeader.name}
      sizeStyle='h-[60px] w-full flex-shrink-0'
      className={`${containerStyles['row-center']} justify-between`}
      borderStyle={borderStyles['border-b']}
      backgroundStyle={backgroundStyles['glass-5']}
    >
      <DraftHeaderLeft>
        <DraftHeaderAddButton
          onClick={() => {
            addConstellation.open();
          }}
        />
      </DraftHeaderLeft>
      <DraftHeaderCenter>
        <DraftHeaderTitle>{headerTitle}</DraftHeaderTitle>
      </DraftHeaderCenter>
      <DraftHeaderRight>
        <DraftHeaderSaveButton onClick={() => starHandler.queryUpdateStars()}/>
      </DraftHeaderRight>
    </Layer>
  );
}
