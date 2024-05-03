import { DivInputProps } from '@/(lgx)/types/element/main';

interface InputProps extends DivInputProps {
  children: React.ReactNode;
}

export function ResourcePolaroid({ children, ...props }: InputProps) {
  return (
    <div
      className='flex aspect-[13/16] h-[300px] flex-shrink-0 cursor-pointer flex-col items-center overflow-hidden bg-stone-100 p-[20px]'
      {...props}
    >
      {children}
    </div>
  );
}
