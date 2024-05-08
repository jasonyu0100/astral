import { Topbar } from '@/(core)/(base)/(topbar)/main';
import { DefaultBackground } from '@/(components)/(app)/background/default/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DefaultBackground>
      <Topbar />
      {children}
    </DefaultBackground>
  );
}
