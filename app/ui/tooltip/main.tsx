import { cn } from '@/utils/cn';
import { useState } from 'react';

export function WrapperTooltip({
  text,
  children,
}: {
  text: string;
  children?: React.ReactNode;
}) {
  const [hover, changeHover] = useState(false);

  return (
    <div
      className='flex flex-col items-center'
      onMouseEnter={() => changeHover(true)}
      onMouseLeave={() => changeHover(false)}
    >
      <div
        className={cn(
          'absolute top-[-50px] w-[200px] p-[0.5rem] text-center font-bold text-slate-300 outline-none',
          {
            'visible animate-pulse': hover,
            invisible: !hover,
          },
        )}
      >
        {text}
      </div>
      {children}
    </div>
  );
}
