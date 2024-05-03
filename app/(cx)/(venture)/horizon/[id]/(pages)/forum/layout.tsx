import { DasharcContent } from '@/(pkgs)/(core)/content/main';
import { DasharcBody } from '@/(pkgs)/(core)/controller/body/main';
import { ReleaseTabStage, ReleaseTabs } from '../../(tabs)/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DasharcBody>
      <ReleaseTabs tab={ReleaseTabStage.Field} />
      <DasharcContent>{children}</DasharcContent>
    </DasharcBody>
  );
}
