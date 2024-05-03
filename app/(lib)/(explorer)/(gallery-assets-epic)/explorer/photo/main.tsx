import { GlassAreaContainer } from '@/(lib)/(glass)/area/main';
import { glassFx } from '@/(fx)/data';
import { DivInputProps } from '@/(lgx)/types/element/main';

interface InputProps extends DivInputProps {
  children: React.ReactNode;

}

export function GalleryPhoto({ children, ...props }: InputProps) {
  return (
    <GlassAreaContainer
      name={GalleryPhoto.name}
      className="flex h-full w-full flex-col"
      sizeFx='h-[500px] aspect-[11/16]'
      glassFx={glassFx['glass-10']}
      {...props}
    >
      {children}
    </GlassAreaContainer>
  );
}
