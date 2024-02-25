import { ButtonInputProps } from '@/(types)/main';

interface InputProps extends ButtonInputProps {
  children: React.ReactNode;
}

export function PortalFormAction({ children, ...props }: InputProps) {
  return (
    <button
      className='mt-auto flex h-[60px] w-full flex-col items-center justify-center bg-slate-950'
      {...props}
    >
      <div className='text-center text-3xl font-bold leading-9 text-white'>
        {children}
      </div>
    </button>
  );
}
