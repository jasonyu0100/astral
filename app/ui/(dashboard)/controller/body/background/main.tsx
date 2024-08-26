'use client';
import { cn } from '@/utils/cn';

export function DashboardBackground() {
  return (
    <>
      <div
        className={cn(
          'h-full w-full animate-breathe-slow overflow-auto bg-gradient-to-b from-slate-900 to-[#2c0441] ',
        )}
      ></div>
    </>
  );
}
