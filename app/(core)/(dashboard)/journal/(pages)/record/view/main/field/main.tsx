import { GlassWindowContents } from '@/(components)/(glass)/window/contents/main';
import { GlassWindowFrame } from '@/(components)/(glass)/window/main';
import { GlassWindowPane } from '@/(components)/(glass)/window/pane/main';
import { useControllerForFlippable } from '@/(logic)/contexts/flippable/main';
import { borderFx, glassFx, roundedFx } from '@/(style)/data';
import { JournalRecordFieldContents } from './contents/main';
import { JournalRecordFieldHeader } from './header/main';

export function JournalRecordField({
  children,
}: {
  children?: React.ReactNode;
}) {
  const flippableController = useControllerForFlippable();
  return (
    <GlassWindowFrame
      className='w-full max-w-[1000px] flex-shrink-0'
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx.rounded}
    >
      <GlassWindowContents onClick={flippableController.flip}>
        <JournalRecordFieldHeader />
        {flippableController.flipped ? (
          <>
            <JournalRecordFieldContents>{children}</JournalRecordFieldContents>
          </>
        ) : (
          <JournalRecordFieldContents>
            <div className='flex items-center p-[1rem]'>
              <p className='font-bold text-white'>Entry #123321</p>
            </div>
          </JournalRecordFieldContents>
        )}
      </GlassWindowContents>
      <GlassWindowPane glassFx={glassFx['glass-5']} />
    </GlassWindowFrame>
  );
}
