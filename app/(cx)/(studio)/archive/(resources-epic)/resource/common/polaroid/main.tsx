import { DivInputProps } from '@/(components)/types/main';

interface InputProps extends DivInputProps {
  children: React.ReactNode;
}

export function ResourcePolaroid({ children, ...props }: InputProps) {
  return (
    <div
      className='mb-[20px] ml-[25px] flex aspect-[13/16] h-[300px] flex-shrink-0 cursor-pointer flex-col items-center overflow-hidden bg-stone-100 p-[20px]'
      {...props}
    >
      {children}
    </div>
  );
}
