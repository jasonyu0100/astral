import { HyperLinkInputProps } from '@/(types)/main';

export interface IndicatorProps {
  indicator: string | undefined;
  minimised?: boolean;
}
interface InputProps extends HyperLinkInputProps {
  children: React.ReactNode;
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
  Creative = 'Creative',
  Venture = 'Venture',
}
