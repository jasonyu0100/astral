import { LinkInputProps } from '@/(lgx)/types/element/main';
import Link from 'next/link';

interface InputProps extends LinkInputProps {
  children: React.ReactNode;
}

export function TopbarLink({ children, ...props }: InputProps) {
  return (
    <Link className='text-slate-500 font-bold text-md' aria-current='page' {...props}>
      {children}
    </Link>
  );
}
