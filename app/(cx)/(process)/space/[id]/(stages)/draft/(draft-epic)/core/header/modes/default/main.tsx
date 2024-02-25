import { DefaultCenter } from './center/main';
import { DefaultLeft } from './left/main';
import { DefaultRight } from './right/main';

export function DraftHeaderDefault() {
  return (
    <>
      <DefaultLeft />
      <DefaultCenter />
      <DefaultRight />
    </>
  );
}
