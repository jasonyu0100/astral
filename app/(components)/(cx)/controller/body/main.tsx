import { DashboardBackground } from './background/main';

export function DashboardBody({ children }: { children: React.ReactNode }) {
  return (
    <div className='relative h-full w-full'>
      <div className='absolute top-0 z-50 flex h-full w-full flex-col overflow-auto'>
        {children}
      </div>
      <DashboardBackground />
    </div>
  );
}
