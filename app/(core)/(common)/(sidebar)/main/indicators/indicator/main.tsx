import { HyperLinkInputProps } from '@/(types)/props/main';

export interface DashboardSidebarIndicatorProps {
  indicator: string | undefined;
  minimised?: boolean;
}
interface InputProps extends HyperLinkInputProps {
  children?: React.ReactNode;
}

export function DashboardSidebarIndicator({ children, ...props }: InputProps) {
  return (
    <a
      {...props}
      className='inline-flex h-[3rem] items-center justify-start gap-[1rem] self-stretch'
    >
      {children}
    </a>
  );
}
export enum DashboardSidebarIndicatorType {
  Studio = 'Studio',
  Archive = 'Archive',
  Journal = 'Journal',
  Network = 'Network',
  Horizon = 'Horizon',
}
