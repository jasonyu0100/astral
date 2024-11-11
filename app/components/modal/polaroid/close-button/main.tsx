import { ButtonInputProps } from '@/props/main';

interface InputProps extends ButtonInputProps {
  children?: React.ReactNode;
}

export function PolaroidModalCloseButton({ children, ...props }: InputProps) {
  return (
    <button {...props}>
      <div className='mt-[3rem] animate-pulse text-center text-xl font-bold leading-7 text-slate-400'>
        {children}
      </div>
    </button>
  );
}
