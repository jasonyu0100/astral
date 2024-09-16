'use client';
import { DashboardController } from '@/(core)/(dashboard)/common/controller/main';
import { CommonTopbar } from '@/(core)/common/(topbar)/main';
import { PortalBackground } from '@/(portal)/common/background/main';
import { Suspense } from 'react';

export default function Layout({
  children,
}: {
  children?: React.ReactNode;
  params: { id: string };
}) {
  return (
    <Suspense fallback={<PortalBackground />}>
      <CommonTopbar />
      <DashboardController>
        <div className='flex h-full w-full items-center justify-center'>
          {children}
        </div>
      </DashboardController>
    </Suspense>
  );
}
