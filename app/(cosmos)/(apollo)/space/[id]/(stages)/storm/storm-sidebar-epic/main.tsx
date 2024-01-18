import { Layer } from '@/(common)/layer/main';
import { backgroundStyles, containerStyles } from '@/(common)/styles/data';
import { StormChapterAdd } from './chapters/chapter/add/main';
import { StormChapter } from './chapters/chapter/main';
import { SidebarColumn } from './chapters/main';
import { useContext } from 'react';
import { StormContext } from '../page';

export function StormSidebar() {
  const { chapters } = useContext(StormContext);

  return (
    <Layer
      displayName={StormSidebar.name}
      sizeStyle='max-w-[500px] min-w-[250px] w-1/4 h-full'
      backgroundStyle={backgroundStyles['glass-10']}
      className={`${containerStyles['col-center']} p-[1rem]`}
    >
      <SidebarColumn>
        {chapters.map((chapter) => (
          <StormChapter chapter={chapter} />
        ))}
        <StormChapterAdd />
      </SidebarColumn>
    </Layer>
  );
}
