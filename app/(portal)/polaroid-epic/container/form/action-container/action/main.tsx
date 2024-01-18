import { ButtonInputProps } from '@/(common)/types/main';

interface InputProps extends ButtonInputProps {
  children: React.ReactNode;
}

export function PortalFormAction({ children, ...props }: InputProps) {
  return (
    <button
      className='w-full h-[60px] bg-slate-950 flex flex-col justify-center items-center mt-auto'
      {...props}
    >
      <div className='text-center text-white text-3xl font-bold leading-9'>
        {children}
      </div>
    </button>
  );
}
