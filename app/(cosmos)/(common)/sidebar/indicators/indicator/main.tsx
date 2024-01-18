import { LinkInputProps } from '@/(common)/types/main';

interface InputProps extends LinkInputProps {
  children: React.ReactNode;
}

export function SidebarIndicator({ children, ...props }: InputProps) {
  return (
    <a
      {...props}
      className='self-stretch justify-start items-center gap-[1rem] inline-flex h-[3rem]'
    >
      {children}
    </a>
  );
}
