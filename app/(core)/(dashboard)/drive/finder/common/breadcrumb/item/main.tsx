import { LinkInputProps } from '@/props/main';
import Link from 'next/link';

interface InputProps extends LinkInputProps {
  children?: React.ReactNode;
  active: boolean;
}

export function DriveFinderBreadcrumbItem({
  children,
  active,
  ...props
}: InputProps) {
  return (
    <div className='flex flex-col'>
      {active ? (
        <Link
          className='animate-pulse text-lg font-bold text-slate-300'
          {...props}
        >
          {children}
        </Link>
      ) : (
        <Link className='text-lg font-bold text-slate-400' {...props}>
          {children}
        </Link>
      )}
    </div>
  );
}
