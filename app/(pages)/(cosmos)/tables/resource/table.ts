import { exampleResourceExplore } from "./explore/main";
import { exampleResource, exampleResources } from "./main";
import { exampleResourceSearch } from "./search/main";

export const resourceTable = {
    example: exampleResource,
    examples: exampleResources,
    explore: {
        example: exampleResourceExplore
    },
    search: {
        example: exampleResourceSearch
    }
}