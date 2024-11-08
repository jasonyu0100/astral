import { vaultMap } from '@/(core)/(dashboard)/vault/map';
import { ContextForCommonSidebar } from '@/(core)/common/(sidebar)/main';
import { useContext } from 'react';
import { CommonIndicatorGoldJewel } from '../../indicator/jewel/gold/main';
import {
  CommonSidebarIndicator,
  CommonSidebarIndicatorType,
} from '../../indicator/main';
import { CommonSidebarIndicatorText } from '../../indicator/text/main';

export function CommonSidebarVaultIndicator() {
  const commonSidebar = useContext(ContextForCommonSidebar);
  const indicatorLabel = CommonSidebarIndicatorType.Vault;
  const active = commonSidebar.indicator === indicatorLabel;

  return (
    <>
      {commonSidebar?.minimised ? (
        <CommonSidebarIndicator href={vaultMap.vault.upload.link}>
          <CommonIndicatorGoldJewel active={active} />
        </CommonSidebarIndicator>
      ) : (
        <CommonSidebarIndicator href={vaultMap.vault.upload.link}>
          <CommonIndicatorGoldJewel active={active} />
          <CommonSidebarIndicatorText active={active}>
            {indicatorLabel}
          </CommonSidebarIndicatorText>
        </CommonSidebarIndicator>
      )}
    </>
  );
}
