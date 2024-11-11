'use client';
import { DashboardContainer } from '@/(core)/(dashboard)/common/container/main';
import { CommonTopbar } from '@/(core)/common/topbar/main';
import { LandingBackground } from '@/(portal)/common/background/main';
import { Suspense } from 'react';

export default function Layout({
  children,
}: {
  children?: React.ReactNode;
  params: { id: string };
}) {
  return (
    <Suspense fallback={<LandingBackground />}>
      <CommonTopbar />
      <DashboardContainer>
        <div className='flex h-full w-full items-center justify-center'>
          {children}
        </div>
      </DashboardContainer>
    </Suspense>
  );
}
