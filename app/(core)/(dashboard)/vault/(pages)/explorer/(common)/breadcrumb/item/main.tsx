import { LinkInputProps } from '@/(types)/props/main';
import Link from 'next/link';

interface InputProps extends LinkInputProps {
  children?: React.ReactNode;
  active: boolean;
}

export function ArchiveExplorerBreadcrumbItem({
  children,
  active,
  ...props
}: InputProps) {
  return (
    <div className='flex flex-col'>
      {active ? (
        <Link className='animate-pulse font-bold text-slate-700' {...props}>
          {children}
        </Link>
      ) : (
        <Link className='font-bold text-slate-700' {...props}>
          {children}
        </Link>
      )}
    </div>
  );
}
