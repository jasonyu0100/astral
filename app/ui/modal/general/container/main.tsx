import { DivInputProps } from '@/props/main';

interface InputProps extends DivInputProps {
  children: React.ReactNode;
}

export function CustomisableModalContents({ children, ...props }: InputProps) {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center p-[5rem]'>
      <div
        className={`flex w-full flex-row items-center justify-center ${props.className}`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
}
