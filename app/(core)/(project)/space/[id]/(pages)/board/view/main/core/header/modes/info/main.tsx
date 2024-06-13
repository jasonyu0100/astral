import { InfoLeft } from './left/main';
import { InfoCenter } from './center/main';
import { InfoRight } from './right/main';

export function BoardHeaderInfo() {
  return (
    <>
      <InfoLeft />
      <InfoCenter />
      <InfoRight />
    </>
  );
}
