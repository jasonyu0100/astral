import { DivInputProps } from '@/props/main';

interface InputProps extends DivInputProps {
  children: React.ReactNode;
}

export function AstralModalBodyWrapper({ children, ...props }: InputProps) {
  return (
    <div className='flex h-full w-full items-center justify-center p-[5rem]'>
      <div
        className={`flex flex-shrink-0 flex-row items-center justify-center space-x-[2rem] rounded-[2rem] border-[1px] border-slate-300 border-opacity-30 bg-slate-500 bg-opacity-30 p-[2rem] ${props.className}`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
}
