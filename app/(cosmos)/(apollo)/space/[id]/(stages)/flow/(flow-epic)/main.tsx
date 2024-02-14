import { Layer } from '@/(common)/layer/main';
import { containerStyles } from '@/(common)/styles/data';
import { FlowChapters } from './chapters/main';
import { FlowPage } from './page/main';

export function FlowBody() {
  return (
    <Layer
      displayName={FlowBody.name}
      sizeStyle='h-full flex-grow'
      className={`${containerStyles['col']}`}
    >
      <FlowPage/>
      <FlowChapters/>
    </Layer>
  );
}
