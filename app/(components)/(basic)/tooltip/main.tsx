import { cn } from '@/(logic)/utils/cn';
import { useState } from 'react';

export function WrapperTooltip({
  text,
  children,
}: {
  text: string;
  children: React.ReactNode;
}) {
  const [hover, changeHover] = useState(false);

  return (
    <div
      className='relative flex flex-col items-center'
      onMouseEnter={() => changeHover(true)}
      onMouseLeave={() => changeHover(false)}
    >
      <div className={cn('absolute top-[-2rem] p-[0.5rem] font-bold text-white outline-none text-center w-[8rem]', {
        'opacity-100': hover,
        'opacity-0': !hover,
      })}>
        {text}
      </div>
      {children}
    </div>
  );
}
