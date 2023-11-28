import ShowcaseComponent from "@ui/showcase";
import DefaultSearch from "./default-search";
import SimpleSearch from "./simple-search";
import VoiceSearch from "./voice-search";
import DropDownSearch from "./drop-down-search";
import LocationSearch from "./location-search";

export default function MyForm() {
  return (
    <div>
      <ShowcaseComponent title="Default Search">
        <DefaultSearch/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Simple Search">
        <SimpleSearch/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Voice Search">
        <VoiceSearch/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Drop Down Search">
        <DropDownSearch/>
      </ShowcaseComponent>
      <ShowcaseComponent title="Location Search">
        <LocationSearch/>
      </ShowcaseComponent>
    </div>
  );
}