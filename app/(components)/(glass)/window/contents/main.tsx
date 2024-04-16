import { DivInputProps } from '@/(logic)/types/element/main';

interface GlassWindowContentsProps extends DivInputProps {
  children: React.ReactNode;
}
export function GlassWindowContents({ children, ...props} : GlassWindowContentsProps) {
    return <div className={`relative z-10 ${props.className || ''}`} style={{height: '100%'}}>{children}</div>
}
