import { Suspense } from 'react';
import { PortalBackground } from './common/background/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <Suspense fallback={<PortalBackground />}>
      <PortalBackground>{children}</PortalBackground>
    </Suspense>
  );
}
