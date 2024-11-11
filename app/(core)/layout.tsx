'use client';

import { AppBackground } from '@/components/background/main';

export default function Layout({ children }: { children?: React.ReactNode }) {
  return <AppBackground>{children}</AppBackground>;
}
