import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { useControllerForFlippable } from '@/(logic)/contexts/flippable/main';
import { glassFx, roundedFx } from '@/(style)/data';

export function SpaceFlowSidebarEntry({
  children,
}: {
  children?: React.ReactNode;
}) {
  const flippableController = useControllerForFlippable();

  return (
    <GlassWindowFrame
      name='temp'
      roundedFx={roundedFx.rounded}
      className='aspect-[13/9] w-full flex-shrink-0'
    >
      {flippableController.flipped ? (
        <>
          <GlassWindowContents
            className='flex cursor-pointer flex-col justify-between  overflow-auto p-[1rem]'
            onClick={flippableController.flip}
          >
            <div className='w-full'>
              <p className='font-permanentMarker  text-lg text-slate-300'>
                John
              </p>
            </div>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        </>
      ) : (
        <GlassWindowContents
          className='flex cursor-pointer flex-col space-y-[0.5rem] overflow-auto bg-black p-[1rem]'
          onClick={flippableController.flip}
        >
          <>
            <div className='text-md list-disc font-bold text-white'>
              <li>This needs work</li>
              <li>Sounds good</li>
              <li>Pretty Good</li>
            </div>
          </>
        </GlassWindowContents>
      )}
    </GlassWindowFrame>
  );
}
