import { LinkInputProps } from '@/(common)/types/main';

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
        <a className='font-bold text-slate-300' {...props}>
          {children}
        </a>
      ) : (
        <a className='font-bold text-slate-500' {...props}>
          {children}
        </a>
      )}
    </>
  );
}
