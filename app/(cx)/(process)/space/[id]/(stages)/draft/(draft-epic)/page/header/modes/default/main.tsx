import { DraftHeaderDefaultCenter } from './center/main';
import { DraftHeaderDefaultLeft } from './left/main';
import { DraftHeaderDefaultRight } from './right/main';

export function DraftHeaderDefault() {
  return (
    <>
      <DraftHeaderDefaultLeft />
      <DraftHeaderDefaultCenter />
      <DraftHeaderDefaultRight />
    </>
  );
}
