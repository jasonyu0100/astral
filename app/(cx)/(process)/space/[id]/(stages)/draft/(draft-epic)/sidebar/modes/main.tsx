export function SidebarBody({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col overflow-auto pr-[2rem]' style={{ height: '100%' }}>
      {children}
    </div>
  );
}
