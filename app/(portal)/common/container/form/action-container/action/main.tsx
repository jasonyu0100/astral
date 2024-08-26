import { ButtonInputProps } from '@/types/props/main';

interface InputProps extends ButtonInputProps {
  children?: React.ReactNode;
}

export function PortalFormAction({ children, ...props }: InputProps) {
  return (
    <button
      className='mt-auto flex h-[4rem] w-full flex-col items-center justify-center bg-slate-950'
      {...props}
    >
      <div className='text-center text-3xl font-bold leading-9 text-white'>
        {children}
      </div>
    </button>
  );
}
