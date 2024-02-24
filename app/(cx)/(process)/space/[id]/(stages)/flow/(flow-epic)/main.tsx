import { Glass } from '@/(components)/glass/main';
import { containerStyles } from '@/(components)/styles/data';
import { FlowChapters } from './chapters/main';
import { FlowPage } from './page/main';

export function FlowBody() {
  return (
    <Glass
      displayName={FlowBody.name}
      sizeStyle='h-full flex-grow'
      className={`${containerStyles['col']}`}
    >
      <FlowPage/>
      <FlowChapters/>
    </Glass>
  );
}
