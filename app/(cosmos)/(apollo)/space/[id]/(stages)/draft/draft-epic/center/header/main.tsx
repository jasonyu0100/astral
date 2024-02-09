import { Layer } from '@/(common)/layer/main';
import {
  containerStyles,
  borderStyles,
  backgroundStyles,
} from '@/(common)/styles/data';
import { DraftHeaderSaveButton } from './right/save/main';
import DraftHeaderTitle from './title/main';
import { DraftHeaderLeft } from './left/main';
import { DraftHeaderRight } from './right/main';
import { useContext } from 'react';
import { DraftContext } from '../../../page';
import { DraftHeaderCenter } from './center/main';
import { DraftHeaderFileButton } from './left/file/main';
import { DraftHeaderLinkButton } from './left/link/main';
import { DraftHeaderLogButton } from './left/log/main';
import { DraftHeaderNoteButton } from './left/note/main';
import { DraftModalContext } from '@/(cosmos)/(modals)/draft-modal/main';
import { DraftHeaderStackButton } from './left/stack/main';

export function DraftHeader() {
  const { chapter, constellation, starHandler } = useContext(DraftContext);
  const headerTitle =
    constellation && chapter
      ? `${constellation.title} - ${chapter.title}`
      : 'None';
  const { addConstellationModal: addConstellation } = useContext(DraftModalContext);

  return (
    <Layer
      displayName={DraftHeader.name}
      sizeStyle='h-[60px] w-full flex-shrink-0'
      className={`${containerStyles['row-center']} justify-between`}
      borderStyle={borderStyles['border-b']}
      backgroundStyle={backgroundStyles['glass-5']}
    >
      <DraftHeaderLeft>
        <DraftHeaderStackButton/>
        <DraftHeaderNoteButton/>
        <DraftHeaderLogButton/>
        <DraftHeaderLinkButton/>
        <DraftHeaderFileButton/>
      </DraftHeaderLeft>
      <DraftHeaderCenter>
        <DraftHeaderTitle>{headerTitle}</DraftHeaderTitle>
      </DraftHeaderCenter>
      <DraftHeaderRight>
        <DraftHeaderSaveButton onClick={() => starHandler.queryUpdateStars()} />
      </DraftHeaderRight>
    </Layer>
  );
}
