import { LinkInputProps } from '@/(common)/types/main';

interface InputProps extends LinkInputProps {
  children: React.ReactNode;
}

export function Tab({ children, ...props }: InputProps) {
  return (
    <a {...props} className='flex w-[9rem] flex-col items-start pt-1'>
      {children}
    </a>
  );
}
