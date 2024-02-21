import { Glass } from '@/(common)/layer/main';
import { backgroundStyles } from '@/(common)/styles/data';
import { DivInputProps } from '@/(common)/types/main';

interface InputProps extends DivInputProps {
  children: React.ReactNode;

}

export function GalleryContainer({ children, ...props }: InputProps) {
  return (
    <Glass
      displayName={GalleryContainer.name}
      className="flex h-full w-full flex-col"
      sizeStyle='h-[500px] aspect-[11/16]'
      backgroundStyle={backgroundStyles['glass-10']}
      {...props}
    >
      {children}
    </Glass>
  );
}
