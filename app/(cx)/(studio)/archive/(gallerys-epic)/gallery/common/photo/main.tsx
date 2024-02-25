import { Glass } from '@/(components)/(basic)/glass/main';
import { backgroundStyles } from '@/(design)/(styles)/data';
import { DivInputProps } from '@/(types)/main';

interface InputProps extends DivInputProps {
  children: React.ReactNode;

}

export function GalleryPhoto({ children, ...props }: InputProps) {
  return (
    <Glass
      displayName={GalleryPhoto.name}
      className="flex h-full w-full flex-col"
      sizeStyle='h-[500px] aspect-[11/16]'
      backgroundStyle={backgroundStyles['glass-10']}
      {...props}
    >
      {children}
    </Glass>
  );
}
