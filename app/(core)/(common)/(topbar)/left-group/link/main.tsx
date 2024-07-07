import { LinkInputProps } from '@/(types)/props/main';
import Link from 'next/link';

interface InputProps extends LinkInputProps {
  children?: React.ReactNode;
}

export function TopbarLink({ children, ...props }: InputProps) {
  return (
    <Link
      className='text-md font-bold text-slate-700'
      aria-current='page'
      {...props}
    >
      {children}
    </Link>
  );
}
