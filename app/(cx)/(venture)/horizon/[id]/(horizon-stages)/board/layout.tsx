import { DasharcContent } from '@/(pkgs)/(core)/content/main';
import { DasharcBody } from '@/(pkgs)/(core)/controller/body/main';
import { ReleaseTabStage, ReleaseTabs } from '../../(horizon-tabs)/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DasharcBody>
      <ReleaseTabs tab={ReleaseTabStage.Arc} />
      <DasharcContent>{children}</DasharcContent>
    </DasharcBody>
  );
}
