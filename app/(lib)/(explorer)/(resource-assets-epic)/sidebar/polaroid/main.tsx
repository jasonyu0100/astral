import { DivInputProps } from '@/(types)/element/main';

interface InputProps extends DivInputProps {
  children: React.ReactNode;
}

export function ResourcePolaroid({ children, ...props }: InputProps) {
  return (
    <div
      className='flex aspect-[13/16] flex-shrink-0 cursor-pointer flex-col items-center overflow-hidden bg-stone-100 p-[10px]'
      {...props}
      style={{width: 'calc(50% - 1rem)'}}
    >
      {children}
    </div>
  );
}
