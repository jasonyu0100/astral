import { SpaceDraftContentsPaletteDefault } from './default/main';
import { SpaceDraftContentsPaletteExpanded } from './expanded/main';

export function SpaceDraftContentsPalette({
  toggled,
  onExpand,
  onCollapse,
}: {
  toggled: boolean;
  onExpand: () => void;
  onCollapse: () => void;
}) {
  return (
    <>
      {toggled ? (
        <SpaceDraftContentsPaletteExpanded onToggle={onCollapse} />
      ) : (
        <SpaceDraftContentsPaletteDefault onToggle={onExpand} />
      )}
    </>
  );
}
