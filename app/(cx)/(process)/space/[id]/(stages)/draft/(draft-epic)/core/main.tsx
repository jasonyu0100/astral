import { Glass } from '@/(components)/glass/main';
import { containerStyles } from '@/(components)/styles/data';
import { DraftBody } from './body/main';
import { DraftHeader } from './header/main';

export function DraftCore() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Glass
        displayName={DraftCore.name}
        sizeStyle='w-full h-full'
        className={`${containerStyles['col']}`}
      >
        <DraftHeader />
        <DraftBody />
      </Glass>
    </div>
  );
}
