import { LinkInputProps } from '@/props/main';
import Link from 'next/link';

interface InputProps extends LinkInputProps {
  children?: React.ReactNode;
}

export function TopbarLink({ children, ...props }: InputProps) {
  return (
    <Link className='text-md font-bold uppercase text-slate-400' {...props}>
      {children}
    </Link>
  );
}
