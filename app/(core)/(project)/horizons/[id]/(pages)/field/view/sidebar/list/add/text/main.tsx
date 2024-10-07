import { AstralAddIcon } from '@/icons/add/main';

export function SpaceJourneySidebarAddText() {
  // const modalController = useContext(ContextForSpacesJourneyModas);

  return (
    <div className='flex aspect-square w-full items-center justify-center bg-yellow-500'>
      <div
        className='flex h-[3rem] w-[3rem] cursor-pointer items-center justify-center rounded-full bg-blue-500'
        onClick={() => {
          // modalController.addTextLinkController.open();
        }}
      >
        <AstralAddIcon />
      </div>
    </div>
  );
}
