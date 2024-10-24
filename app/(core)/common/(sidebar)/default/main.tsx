import { HorizontalDivider } from '@/components/indicator/divider/horizontal/main';
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
        {process.env.VERSES_MODE === 'true' && (
          <CommonSidebarExplorerIndicator />
        )}
        <CommonSidebarJournalIndicator />
        {process.env.VERSES_MODE === 'false' && (
          <CommonSidebarNetworkIndicator />
        )}
        <CommonSidebarVaultIndicator />
      </CommonSidebarIndicators>
    </CommonSidebarDefaultContainer>
  );
}
