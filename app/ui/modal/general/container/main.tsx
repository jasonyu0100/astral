import { DivInputProps } from '@/props/main';

interface InputProps extends DivInputProps {
  children: React.ReactNode;
}

export function CustomisableModalContents({ children, ...props }: InputProps) {
  return (
    <div className='flex h-full w-full flex-col items-center justify-evenly p-[5rem]'>
      <div
        className={`flex h-3/4 w-full flex-row items-center justify-center gap-[3rem] overflow-auto rounded-[3rem] border-[1px] border-slate-300 border-opacity-30 bg-slate-800 bg-opacity-80 p-[2rem]`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
}
