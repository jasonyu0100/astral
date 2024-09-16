import { HyperLinkInputProps } from '@/types/props/main';

export interface CommonSidebarIndicatorProps {
  indicator: string | undefined;
  minimised?: boolean;
}
interface InputProps extends HyperLinkInputProps {
  children?: React.ReactNode;
}

export function CommonSidebarIndicator({ children, ...props }: InputProps) {
  return (
    <a
      {...props}
      className='inline-flex h-[3rem] items-center justify-start gap-[1rem] self-stretch'
    >
      {children}
    </a>
  );
}
export enum CommonSidebarIndicatorType {
  Studio = 'Studio',
  Vault = 'Vault',
  Journal = 'Journal',
  Network = 'Network',
  Explorer = 'Explorer',
}
