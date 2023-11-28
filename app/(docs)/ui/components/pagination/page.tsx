import ShowcaseComponent from "@ui/showcase";
import DefaultPagination from "./default-pagination";
import IconPagination from "./icon-pagination";
import PreviousNextIconPagination from "./previous-next-icon-pagination";
import PreviousNextPagination from "./previous-next-pagination";
import TableIconPagination from "./table-icon-pagination";
import TablePagination from "./table-pagination";

export default function Pagination() {
  return (
    <div>
      <ShowcaseComponent title="Default Pagination">
        <DefaultPagination />
      </ShowcaseComponent>
      <ShowcaseComponent title="Icon Pagination">
        <IconPagination />
      </ShowcaseComponent>
      <ShowcaseComponent title="Previous Next Pagination">
        <PreviousNextPagination />
      </ShowcaseComponent>
      <ShowcaseComponent title="Previous Next Icon Pagination">
        <PreviousNextIconPagination />
      </ShowcaseComponent>
      <ShowcaseComponent title="Table Pagination">
        <TablePagination />
      </ShowcaseComponent>
      <ShowcaseComponent title="Table Icon Pagination">
        <TableIconPagination />
      </ShowcaseComponent>
    </div>
  );
}
