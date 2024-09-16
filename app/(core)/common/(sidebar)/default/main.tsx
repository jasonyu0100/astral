import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';
import { CommonSidebarDefaultContainer } from '../common/container/default/main';
import { CommonSidebarIndicators } from '../common/indicators/main';
import { CommonSidebarExplorerIndicator } from '../common/indicators/variants/explorer/main';
import { CommonSidebarJournalIndicator } from '../common/indicators/variants/journal/main';
import { CommonSidebarNetworkIndicator } from '../common/indicators/variants/network/main';
import { CommonSidebarSpaceIndicator } from '../common/indicators/variants/studio/main';
import { CommonSidebarVaultIndicator } from '../common/indicators/variants/vault/main';
import { CommonSidebarTopSpace } from '../top/space/main';

export function CommonSidebarDefault() {
  return (
    <CommonSidebarDefaultContainer>
      <CommonSidebarTopSpace />
      <HorizontalDivider className='my-[1rem] mb-[2rem]' />
      <CommonSidebarIndicators>
        <CommonSidebarSpaceIndicator />
        <CommonSidebarExplorerIndicator />
        <CommonSidebarJournalIndicator />
        <CommonSidebarNetworkIndicator />
        <CommonSidebarVaultIndicator />
      </CommonSidebarIndicators>
      <HorizontalDivider className='my-[2rem] mb-[2rem]' />
      <div>{/* We are travelling in time */}</div>
    </CommonSidebarDefaultContainer>
  );
}
