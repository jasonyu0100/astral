import { ButtonInputProps } from '@/(types)/props/main';

interface InputProps extends ButtonInputProps {
  children?: React.ReactNode;
}

export function PortalFormGoogleAction({ children, ...props }: InputProps) {
  return (
    <button
      className='mb-[1rem] flex h-[4rem] w-full flex-shrink-0 flex-col items-center justify-center border-[3px] border-blue-700'
      {...props}
    >
      <div className='text-center text-xl font-bold leading-9 text-blue-700'>
        {children}
      </div>
    </button>
  );
}
