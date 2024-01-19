import { Layer } from '@/(common)/layer/main';
import { containerStyles, borderStyles } from '@/(common)/styles/data';
import { DraftHeaderAddButton } from './add/main';
import { DraftHeaderListButton } from './left/list/main';
import DraftHeaderTitle from './title/main';
import { DraftHeaderLeft } from './left/main';
import { DraftHeaderRight } from './right/main';
import { useContext } from 'react';
import { DraftContext } from '../../../page';
import { DraftModalContext } from '../../modal/main';

export function DraftHeader() {
  const { chapter, constellation } =
    useContext(DraftContext);
  const headerTitle =
    constellation && chapter
      ? `${constellation.title} - ${chapter.title}`
      : 'None';
  const { addChapter } = useContext(DraftModalContext)

  return (
    <>      
    <Layer
      displayName={DraftHeader.name}
      sizeStyle='h-[50px] w-full flex-shrink-0'
      className={`${containerStyles['row-center']} px-[1rem] space-x-[1rem] justify-between`}
      borderStyle={borderStyles['border-b']}
    >
      <DraftHeaderLeft>
        <DraftHeaderListButton />
      </DraftHeaderLeft>
      <div className='flex flex-row justify-center w-1/3'>
        <DraftHeaderTitle>{headerTitle}</DraftHeaderTitle>
      </div>
      <DraftHeaderRight>
        <DraftHeaderAddButton
          onClick={() => {
            addChapter.open()
          }}
        />
      </DraftHeaderRight>
    </Layer>
    </>
  );
}
