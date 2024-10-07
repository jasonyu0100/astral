import { glassFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';

export function HorizonsFieldHeader() {
  return (
    <GlassAreaContainer
      name={HorizonsFieldHeader.name}
      sizeFx='h-[4rem] w-full flex-shrink-0'
      glassFx={glassFx['glass-5']}
      className={`flex items-center justify-between px-[1rem]`}
    >
      {/* <HorizonsFieldHeaderLeft /> */}
      {/* <HorizonsFieldHeaderMiddle /> */}
      {/* <HorizonsFieldHeaderRight /> */}
    </GlassAreaContainer>
  );
}
