import { GlassAreaContainer } from '@/components/glass/area/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { useContext } from 'react';
import {
  ContextForSpacesTable,
  SpacesTableSidebarVisibility,
} from '../controller/main';
import { SpacesTableMain } from './main/main';
import { SpacesTableSidebar } from './sidebar/main';

export function SpacesTableView() {
  const {
    state: { sidebarVisibility },
  } = useContext(ContextForSpacesTable);

  return (
    <GlassAreaContainer
      name={SpacesTableView.name}
      sizeFx='h-full flex-grow'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container']}
    >
      {sidebarVisibility !== SpacesTableSidebarVisibility.CLOSED && (
        <SpacesTableSidebar />
      )}
      <SpacesTableMain />
    </GlassAreaContainer>
  );
}
