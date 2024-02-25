import { LinkInputProps } from '@/(types)/main';
import Link from 'next/link';

interface InputProps extends LinkInputProps {
  children: React.ReactNode;
  active: boolean;
}

export function CollectionBreadcrumbItem({
  children,
  active,
  ...props
}: InputProps) {
  return (
    <>
      {active ? (
        <Link className='font-bold text-slate-300' {...props}>
          {children}
        </Link>
      ) : (
        <Link className='font-bold text-slate-500' {...props}>
          {children}
        </Link>
      )}
    </>
  );
}
