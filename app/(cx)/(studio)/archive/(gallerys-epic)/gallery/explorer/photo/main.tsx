import { GlassContainer } from '@/(components)/(basic)/glass/container/main';
import { backgroundStyles } from '@/(design)/(styles)/data';
import { DivInputProps } from '@/(types)/main';

interface InputProps extends DivInputProps {
  children: React.ReactNode;

}

export function GalleryPhoto({ children, ...props }: InputProps) {
  return (
    <GlassContainer
      displayName={GalleryPhoto.name}
      className="flex h-full w-full flex-col"
      sizeStyle='h-[500px] aspect-[11/16]'
      glassStyle={backgroundStyles['glass-10']}
      {...props}
    >
      {children}
    </GlassContainer>
  );
}
