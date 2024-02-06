import { LinkInputProps } from '@/(common)/types/main';

export interface IndicatorProps {
  indicator: string | undefined;
  minimised?: boolean;
}
interface InputProps extends LinkInputProps {
  children: React.ReactNode;
}

export function SidebarIndicator({ children, ...props }: InputProps) {
  return (
    <a
      {...props}
      className='inline-flex h-[3rem] items-center justify-start gap-[1rem] self-stretch'
    >
      {children}
    </a>
  );
}
export enum SidebarIndicatorType {
  Spaces = 'Spaces',
  Vault = 'Vault',
  Journal = 'Journal',
  Square = 'Square',
  Board = 'Board',
}
