import { LinkInputProps } from '@/(common)/types/main';
import Link from 'next/link';

interface InputProps extends LinkInputProps {
  children: React.ReactNode;
}

export function TopbarLink({ children, ...props }: InputProps) {
  return (
    <Link className='text-white' aria-current='page' {...props}>
      {children}
    </Link>
  );
}
