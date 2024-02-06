import { LinkInputProps } from '@/(common)/types/main';
import Link from 'next/link';

export interface IndicatorProps {
  indicator: string | undefined;
  minimised?: boolean;
}
interface InputProps extends LinkInputProps {
  children: React.ReactNode;
}

export function SidebarIndicator({ children, ...props }: InputProps) {
  return (
    <Link
      {...props}
      className='inline-flex h-[3rem] items-center justify-start gap-[1rem] self-stretch'
    >
      {children}
    </Link>
  );
}
export enum SidebarIndicatorType {
  Spaces = 'Spaces',
  Vault = 'Vault',
  Journal = 'Journal',
  Square = 'Square',
  Board = 'Board',
}
