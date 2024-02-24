import { Glass } from '@/(components)/glass/main';
import { borderStyles } from '@/(components)/styles/data';
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
