import { Layer } from '@/(common)/layer/main';

export function StormSidebarChapters({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Layer
        displayName={StormSidebarChapters.name}
        sizeStyle='h-full w-full'
        className='flex flex-col overflow-auto divide-slate-700 divide-y-[1px]'
      >
        {children}
      </Layer>
    </div>
  );
}
