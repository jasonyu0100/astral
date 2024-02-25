import { Glass } from '@/(components)/(basic)/glass/main';
import { borderStyles } from '@/(design)/(styles)/data';

export function FeedSidebarHeader() {
  return (
    <Glass
      displayName={FeedSidebarHeader.name}
      sizeStyle='h-[60px] w-full flex-shrink-0'
      className='flex flex-row items-center'
      borderStyle={borderStyles['border-b']}
    >
      <p className='font-extraBold  text-xl text-slate-400'>Moments</p>
    </Glass>
  );
}
