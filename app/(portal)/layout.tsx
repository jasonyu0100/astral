import { Suspense } from 'react';
import { LandingBackground } from './common/background/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <Suspense fallback={<LandingBackground />}>
      <LandingBackground>{children}</LandingBackground>
    </Suspense>
  );
}
