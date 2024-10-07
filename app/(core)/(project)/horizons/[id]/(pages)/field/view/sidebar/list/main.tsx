import { HorizontalDivider } from '@/ui/indicator/divider/horizontal/main';

export function HorizonsFieldsSidebarList() {
  // const {
  //   state: { sidebarMode },
  // } = useContext(ContextForSpacesJourney);
  // const linkListController = useContext(ContextForLogLinkList);

  return (
    <div
      className='flex flex-col space-y-[1rem] overflow-auto p-[1rem]'
      style={{ height: '100%', width: '100%' }}
    >
      <div className='flex flex-col items-center space-y-[1rem]'>
        {/* {linkListController.state.objs
          .filter((obj) =>
            sidebarMode === SpacesJourneySidebarMode.NOTES
              ? obj.variant === ElementVariant.TEXT
              : obj.variant === ElementVariant.URL ||
                obj.variant === ElementVariant.FILE,
          )
          .map((log) => (
            <ContextForWayLinkObj.Provider value={log}>
              <SpacesJourneySidebarLinksListItem />
            </ContextForWayLinkObj.Provider>
          ))} */}
        <HorizontalDivider />
        {/* {sidebarMode === SpacesJourneySidebarMode.LINKS && (
          <SpacesJourneySidebarAddFile />
        )}

        {sidebarMode === SpacesJourneySidebarMode.NOTES && (
          <SpaceJourneySidebarAddText />
        )} */}
      </div>
    </div>
  );
}
