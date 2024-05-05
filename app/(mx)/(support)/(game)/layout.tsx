import { Topbar } from '@/(cx)/(base)/(topbar)/main';
import { DefaultBackground } from '@/(lib)/(app)/background/default/main';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DefaultBackground>
      <Topbar />
      {children}
    </DefaultBackground>
  );
}
