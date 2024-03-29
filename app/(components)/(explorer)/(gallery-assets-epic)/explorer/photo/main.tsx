import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { glassStyles } from '@/(design)/(styles)/data';
import { DivInputProps } from '@/(types)/main';

interface InputProps extends DivInputProps {
  children: React.ReactNode;

}

export function GalleryPhoto({ children, ...props }: InputProps) {
  return (
    <GlassAreaContainer
      name={GalleryPhoto.name}
      className="flex h-full w-full flex-col"
      size='h-[500px] aspect-[11/16]'
      glass={glassStyles['glass-10']}
      {...props}
    >
      {children}
    </GlassAreaContainer>
  );
}
