import { Layer } from '@/(common)/layer/main';
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from '@/(common)/styles/data';
import { StormChapterAdd } from './chapters/chapter/add/main';
import { StormChapter } from './chapters/chapter/main';
import { StormSidebarChapters } from './chapters/main';
import { useContext, useState } from 'react';
import { StormContext } from '../page';
import { StormModalContext } from '../storm-epic/modal/main';
import { StormSidebarHeader } from './header/main';

export function StormSidebar() {
  const { chapters } = useContext(StormContext);
  const { addChapter } = useContext(StormModalContext);

  return (
    <>
      <Layer
        displayName={StormSidebar.name}
        sizeStyle='max-w-[500px] min-w-[250px] w-1/4 h-full'
        backgroundStyle={backgroundStyles['glass-10']}
        className={`${containerStyles['col-center']} px-[1rem] space-y-[1rem]`}
      >
        <StormSidebarHeader/>
        <StormSidebarChapters>
          {chapters.map((chapter) => (
            <StormChapter chapter={chapter} />
          ))}
          <StormChapterAdd onClick={() => addChapter.open()} />
        </StormSidebarChapters>
      </Layer>
    </>
  );
}
