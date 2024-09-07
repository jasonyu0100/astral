import { VentureHorizonsListElement } from './element/main';

export function VentureHorizonsList() {
  return (
    <div
      className={`flex h-full w-full flex-row space-x-[2rem] overflow-auto py-[2rem]`}
    >
      <VentureHorizonsListElement />
      <VentureHorizonsListElement />
      <VentureHorizonsListElement />
      <VentureHorizonsListElement />
      <VentureHorizonsListElement />
      <VentureHorizonsListElement />
      <VentureHorizonsListElement />
      <VentureHorizonsListElement />
    </div>
  );
}
