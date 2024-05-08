import { Divider } from '@/(components)/(line)/divider/main';
import { LinkInputProps } from '@/(types)/element/main';
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
    <div className='flex flex-col'>
      {active ? (
          <Link className='animate-pulse font-bold text-slate-300' {...props}>
            {children}
          </Link>
      ) : (
        <Link className='font-bold text-slate-500' {...props}>
          {children}
        </Link>
      )}
    </div>
  );
}
