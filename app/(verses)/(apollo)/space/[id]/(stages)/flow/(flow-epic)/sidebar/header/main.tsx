import { Glass } from '@/(common)/layer/main';
import { borderStyles } from '@/(common)/styles/data';

export function FlowSidebarHeader() {
  return (
    <Glass
      displayName={FlowSidebarHeader.name}
      sizeStyle='h-[60px] w-full flex-shrink-0'
      className='flex flex-row items-center'
      borderStyle={borderStyles['border-b']}
    >
      <p className='font-extraBold  text-xl text-slate-400'>Moments</p>
    </Glass>
  );
}
