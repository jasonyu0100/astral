import { Glass } from '@/(common)/layer/main';
import { borderStyles } from '@/(common)/styles/data';
import { DraftPanelHeader } from './header/main';
import { DraftPanelList } from './list/main';

export function DraftPanel() {
  return (
    <Glass
      displayName={DraftPanel.name}
      sizeStyle='w-[300px] h-full'
      className='flex flex-col'
      borderStyle={borderStyles['border-r']}
    >
      <DraftPanelHeader />
      <DraftPanelList />
    </Glass>
  );
}
