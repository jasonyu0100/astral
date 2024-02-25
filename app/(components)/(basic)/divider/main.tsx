import { GlassContainer } from '../glass/container/main';
import { borderStyles } from '../../../(design)/(styles)/data';

export function Divider() {
  return (
    <GlassContainer
      displayName={Divider.name}
      sizeStyle='w-full h-[0px]'
      borderStyle={borderStyles['border-b']}
    ></GlassContainer>
  );
}
