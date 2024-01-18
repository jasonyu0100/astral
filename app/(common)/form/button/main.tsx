import { ButtonInputProps } from '@/(common)/types/main';

interface InputProps extends ButtonInputProps {
  children: React.ReactNode;
}

export function FormButton({ children, ...props }: InputProps) {
  return (
    <button
      {...props}
      className={`w-full h-[60px] bg-slate-950 flex flex-col justify-center items-center ${props.className}`}
    >
      <p className='text-center text-white text-3xl font-bold leading-9'>
        {children}
      </p>
    </button>
  );
}
