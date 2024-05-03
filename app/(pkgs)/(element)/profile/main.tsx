import { GlassEffectWrapper } from '@/(pkgs)/(glass)/effect/main';
import { roundedFx } from '@/(fx)/data';
import { FileObj } from '@/(lgx)/internal/model/resource/file/main';
import { DivInputProps } from '@/(lgx)/types/element/main';

interface ProfileCoverProps extends DivInputProps {
  coverFx?: string;
  file: FileObj;
}

export function ProfileCover({ coverFx, file, ...props }: ProfileCoverProps) {
  return (
    <GlassEffectWrapper
      className={props.className}
      roundedFx={roundedFx['rounded-full']}
    >
      <img
        className={`h-[50px] w-[50px] animate-pulse-slow rounded-full ${coverFx || ''}`}
        src={file.src}
        alt={file.title}
      />
    </GlassEffectWrapper>
  );
}
