import { GlassWindowContents } from "@/(components)/(glass)/window/contents/main";
import { GlassWindowFrame } from "@/(components)/(glass)/window/main";
import { GlassWindowPane } from "@/(components)/(glass)/window/pane/main";
import { spaceMap } from "@/(core)/(project)/space/[id]/map";
import { horizonMap } from "@/(core)/(project)/horizon/[id]/map";
import { glassFx } from "@/(style)/data";
import { exampleFileElems } from "@/(server)/(model)/elements/file/main";

export function JournalHeaderContents() {
  return (
    <GlassWindowFrame className='w-full'>
      <GlassWindowContents className='max-h-[20rem] w-full overflow-auto'>
        <div className='space-y-[1rem]  p-[1rem]'>
          <h1 className='text-slate-300'>Hello World</h1>
          <h1 className='text-slate-300'>Hello World</h1>
          <h1 className='text-slate-300'>Hello World</h1>
          <h1 className='text-slate-300'>Hello World</h1>
          <img src={exampleFileElems[2].src} className='w-full max-w-[360px]' />
          <p className='text-xs font-bold text-slate-500'>
            <a href={horizonMap.horizon.id.field.link('0')}>Horizon XYZ</a>
            {'>'}
            <a href={spaceMap.space.id.storm.link('0')}>Space XYZ</a>
          </p>
        </div>
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
