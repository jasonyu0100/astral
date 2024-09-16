import { studioMap } from '@/(core)/(dashboard)/studio/map';
import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { useContext } from 'react';
import { CommonSidebarMinimisedContainer } from '../common/container/minimised/main';
import { CommonSidebarIndicators } from '../common/indicators/main';
import { CommonSidebarExplorerIndicator } from '../common/indicators/variants/explorer/main';
import { CommonSidebarJournalIndicator } from '../common/indicators/variants/journal/main';
import { CommonSidebarNetworkIndicator } from '../common/indicators/variants/network/main';
import { CommonSidebarSpaceIndicator } from '../common/indicators/variants/studio/main';
import { CommonSidebarVaultIndicator } from '../common/indicators/variants/vault/main';
import { ContextForCommonSidebar } from '../main';
import { CommonSidebarTopBack } from '../top/back/main';

export function CommonSidebarMinimised() {
  const context = useContext(ContextForCommonSidebar);

  return (
    <CommonSidebarMinimisedContainer>
      <CommonSidebarTopBack
        href={context.backUrl || studioMap.studio.personal.link}
      />
      <HorizontalDivider className='my-[1rem] mb-[2rem]' />
      <CommonSidebarIndicators>
        <CommonSidebarSpaceIndicator />
        <CommonSidebarExplorerIndicator />
        <CommonSidebarJournalIndicator />
        <CommonSidebarNetworkIndicator />
        <CommonSidebarVaultIndicator />
      </CommonSidebarIndicators>
      <HorizontalDivider className='my-[2rem] mb-[2rem]' />
      <div>{/* We are already travelling in time */}</div>
    </CommonSidebarMinimisedContainer>
  );
}
