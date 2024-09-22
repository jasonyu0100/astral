import { DivInputProps } from '@/props/main';

interface GlassWindowContentsProps extends DivInputProps {
  children?: React.ReactNode;
  onClick?: () => void;
}
export function GlassWindowContents({
  children,
  onClick,
  ...props
}: GlassWindowContentsProps) {
  return (
    <div
      onClick={onClick}
      className={`relative z-10 ${props.className || ''}`}
      style={{ height: '100%' }}
    >
      {children}
    </div>
  );
}
