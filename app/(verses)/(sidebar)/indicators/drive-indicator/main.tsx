import { vaultMap } from '@/(verses)/(voyager)/vault/map';
import { IndicatorProps, SidebarIndicator } from '../indicator/main';
import { IndicatorText } from '../indicator/text/main';
import { SidebarIndicatorType } from '../indicator/main';
import { IndicatorGreenJewel } from '../indicator/jewel/green/main';

export function VaultIndicator({ indicator, minimised }: IndicatorProps) {
  const indicatorLabel = SidebarIndicatorType.Vault;
  const active = indicator === indicatorLabel;

  return (
    <>
      {minimised ? (
        <SidebarIndicator href={vaultMap.vault.explorer.link}>
          <IndicatorGreenJewel active={active} />
        </SidebarIndicator>
      ) : (
        <SidebarIndicator href={vaultMap.vault.explorer.link}>
          <IndicatorGreenJewel active={active} />
          <IndicatorText active={active}>{indicatorLabel}</IndicatorText>
        </SidebarIndicator>
      )}
    </>
  );
}
