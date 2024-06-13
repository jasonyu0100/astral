import { DefaultCenter } from './center/main';
import { DefaultLeft } from './left/main';
import { DefaultRight } from './right/main';

export function BoardHeaderDefault() {
  return (
    <>
      <DefaultLeft />
      <DefaultCenter />
      <DefaultRight />
    </>
  );
}
