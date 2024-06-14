import { SpaceBoardDefaultCenter } from './center/main';
import { SpaceBoardDefaultLeft } from './left/main';
import { SpaceBoardDefaultRight } from './right/main';

export function BoardHeaderDefault() {
  return (
    <>
      <SpaceBoardDefaultLeft />
      <SpaceBoardDefaultCenter />
      <SpaceBoardDefaultRight />
    </>
  );
}
