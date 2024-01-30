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
        <a className='text-slate-300 font-bold' {...props}>
          {children}
        </a>
      ) : (
        <a className='text-slate-500 font-bold' {...props}>
          {children}
        </a>
      )}
    </>
  );
}
