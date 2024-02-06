import { LinkInputProps } from '@/(common)/types/main';
import Link from 'next/link';

interface InputProps extends LinkInputProps {
  children: React.ReactNode;
}

export function TopbarIconLink({ children, ...props }: InputProps) {
  return (
    <Link
      className='inline-flex items-center rounded-full p-2 text-center text-sm font-medium text-gray-600 hover:text-white'
      {...props}
    >
      {children}
    </Link>
  );
}
