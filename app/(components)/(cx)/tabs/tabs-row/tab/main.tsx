import { LinkInputProps } from '@/(logic)/types/element/main';
import Link from 'next/link';

interface InputProps extends LinkInputProps {
  children: React.ReactNode;
}

export function Tab({ children, ...props }: InputProps) {
  return (
    <Link {...props} className='flex w-[9rem] flex-col items-start pt-1'>
      {children}
    </Link>
  );
}
