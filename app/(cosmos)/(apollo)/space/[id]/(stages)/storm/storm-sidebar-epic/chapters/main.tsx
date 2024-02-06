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
        className='flex flex-col space-y-[2rem] overflow-auto'
      >
        {children}
      </Layer>
    </div>
  );
}
