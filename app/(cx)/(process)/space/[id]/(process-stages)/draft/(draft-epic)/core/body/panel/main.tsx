import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import { borderStyles } from '@/(design)/(styles)/data';
import { DraftPanelHeader } from './header/main';
import { DraftConstellationList } from './list/main';

export function DraftPanel() {
  return (
    <GlassAreaContainer
      name={DraftPanel.name}
      size='w-[300px] h-full'
      className='flex flex-col'
      border={borderStyles['border-r']}
    >
      <DraftPanelHeader />
      <DraftConstellationList />
    </GlassAreaContainer>
  );
}
