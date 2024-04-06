import { DefaultCenter } from './center/main';
import { DefaultLeft } from './left/main';
import { DefaultRight } from './right/main';

export function MapHeaderDefault() {
  return (
    <>
      <DefaultLeft />
      <DefaultCenter />
      <DefaultRight />
    </>
  );
}
