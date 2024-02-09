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
import { DraftHeaderStackButton } from './left/stack/main';
import { useStarModal } from '@/(cosmos)/(modals)/star-modal/main';

export function DraftHeader() {
  const { chapter, constellation, starHandler } = useContext(DraftContext);
  const headerTitle =
    constellation && chapter
      ? `${constellation.title} - ${chapter.title}`
      : 'None';

  const modalContext = useStarModal();

  return (
    <Layer
      displayName={DraftHeader.name}
      sizeStyle='h-[60px] w-full flex-shrink-0'
      className={`${containerStyles['row-center']} justify-between`}
      borderStyle={borderStyles['border-b']}
      backgroundStyle={backgroundStyles['glass-5']}
    >
      <DraftHeaderLeft>
        <DraftHeaderStackButton
          onClick={() => {
            modalContext.addStackStarModal.open()
            alert('afdsafsd')
          }}
        />
        <DraftHeaderNoteButton
          onClick={() => modalContext.addNoteStarModal.open()}
        />
        <DraftHeaderLogButton
          onClick={() => modalContext.addLogStarModal.open()}
        />
        <DraftHeaderLinkButton
          onClick={() => modalContext.addLinkStarModal.open()}
        />
        <DraftHeaderFileButton
          onClick={() => modalContext.addFileStarModal.open()}
        />
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
