import { LinkInputProps } from '@/(common)/types/main';

interface InputProps extends LinkInputProps {
  children: React.ReactNode;
}

export function Tab({ children, ...props }: InputProps) {
  return (
    <a {...props} className='flex flex-col items-start w-[9rem] pt-1'>
      {children}
    </a>
  );
}
