import { DasharcContent } from '@/(lib)/(core)/content/main';
import { DasharcBody } from '@/(lib)/(core)/controller/body/main';
import { ReleaseTabStage, ReleaseTabs } from '../../(tabs)/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DasharcBody>
      <ReleaseTabs tab={ReleaseTabStage.Point} />
      <DasharcContent>{children}</DasharcContent>
    </DasharcBody>
  );
}
