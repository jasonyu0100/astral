import { Layer } from '@/(common)/layer/main';
import { backgroundStyles, containerStyles } from '@/(common)/styles/data';
import { StormSidebarChapters } from './chapters/main';
import { StormSidebarHeader } from './header/main';

export function StormSidebar() {
  return (
    <Layer
      displayName={StormSidebar.name}
      sizeStyle='max-w-[500px] min-w-[250px] w-1/4 h-full'
      backgroundStyle={backgroundStyles['glass-10']}
      className={`${containerStyles['col-center']} space-y-[0.5rem] px-[1rem]`}
    >
      <StormSidebarHeader />
      <StormSidebarChapters />
    </Layer>
  );
}
