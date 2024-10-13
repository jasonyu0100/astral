import { AstralCloseIcon } from '@/icons/close/main';
import { DivInputProps } from '@/props/main';
import { AstralButtonRoundedAction } from '@/ui/button/rounded/action/main';

interface InputProps extends DivInputProps {
  children: React.ReactNode;
}

export function CustomisableModalContents({ children, ...props }: InputProps) {
  return (
    <div className='flex h-full w-full flex-col items-center justify-evenly p-[5rem]'>
      <div className='absolute right-[5rem] top-[5rem]'>
        <AstralButtonRoundedAction className='from-slate-500 to-slate-600'>
          <AstralCloseIcon />
        </AstralButtonRoundedAction>
      </div>
      <div
        className={`flex w-full flex-row items-center justify-center gap-[3rem] overflow-auto rounded-[3rem] border-[1px] border-slate-300 border-opacity-30 bg-slate-800 bg-opacity-30 p-[2rem] ${props.className}`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
}
