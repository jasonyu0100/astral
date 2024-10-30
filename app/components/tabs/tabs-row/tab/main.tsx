import { HyperLinkInputProps } from '@/props/main';

interface InputProps extends HyperLinkInputProps {
  children?: React.ReactNode;
}

export function Tab({ children, ...props }: InputProps) {
  return (
    <a {...props} className='flex w-[9rem] flex-col items-start pt-1'>
      {children}
    </a>
  );
}
