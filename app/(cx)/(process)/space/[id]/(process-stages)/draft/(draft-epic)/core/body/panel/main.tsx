import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { borderStyles } from '@/(design)/(styles)/data';
import { DraftPanelHeader } from './header/main';
import { DraftConstellationList } from './list/main';

export function DraftPanel() {
  return (
    <GlassContainer
      displayName={DraftPanel.name}
      sizeStyle='w-[300px] h-full'
      className='flex flex-col'
      borderStyle={borderStyles['border-r']}
    >
      <DraftPanelHeader />
      <DraftConstellationList />
    </GlassContainer>
  );
}
