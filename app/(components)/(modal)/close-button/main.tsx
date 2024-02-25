import { ButtonInputProps } from '@/(types)/main';

interface InputProps extends ButtonInputProps {
  children: React.ReactNode;
}

export function ModalCloseButton({ children, ...props }: InputProps) {
  return (
    <button {...props}>
      <div className='mt-[3rem] animate-pulse text-center text-xl font-bold leading-7 text-slate-500'>
        {children}
      </div>
    </button>
  );
}
