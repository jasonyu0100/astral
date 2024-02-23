import { Glass } from '@/(components)/layer/main';
import { borderStyles } from '@/(components)/styles/data';

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
