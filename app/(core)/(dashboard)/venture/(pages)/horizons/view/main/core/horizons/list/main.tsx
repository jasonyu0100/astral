import { VentureHorizonsListElement } from './element/main';

export function VentureHorizonsList() {
  return (
    <div
      className={`flex h-full w-full flex-row space-x-[1rem] overflow-auto py-[1rem]`}
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
