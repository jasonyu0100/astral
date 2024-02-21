import { Glass } from '@/(common)/layer/main';
import { containerStyles } from '@/(common)/styles/data';
import { DraftBody } from './body/main';
import { DraftHeader } from './header/main';

export function DraftPage() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Glass
        displayName={DraftPage.name}
        sizeStyle='w-full h-full'
        className={`${containerStyles['col']}`}
      >
        <DraftHeader />
        <DraftBody />
      </Glass>
    </div>
  );
}
