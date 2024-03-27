import { DivInputProps } from '@/(types)/main';

interface GlassWindowContentsProps extends DivInputProps {
  children: React.ReactNode;
}
export function GlassWindowContents({ children, ...props} : GlassWindowContentsProps) {
    return <div className={`relative z-50 ${props.className || ''}`}>{children}</div>
}
