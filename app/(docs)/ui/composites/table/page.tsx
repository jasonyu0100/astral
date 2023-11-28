import ShowcaseComponent from "@ui/showcase";
import DefaultTable from "./default-table";
import CheckboxTable from "./checkbox-table";
import ComparisonTable from "./comparison-table";
import ProductTable from "./product-table";
import StripedTable from "./striped-table";
import UserTable from "./user-table";

export default function Table() {
  return (
    <div>
      <ShowcaseComponent title="Default Table">
        <DefaultTable />
      </ShowcaseComponent>
      <ShowcaseComponent title="Default Table">
        <CheckboxTable />
      </ShowcaseComponent>
      <ShowcaseComponent title="Default Table">
        <ComparisonTable />
      </ShowcaseComponent>
      <ShowcaseComponent title="Default Table">
        <ProductTable />
      </ShowcaseComponent>
      <ShowcaseComponent title="Default Table">
        <StripedTable />
      </ShowcaseComponent>
      <ShowcaseComponent title="Default Table">
        <UserTable />
      </ShowcaseComponent>
    </div>
  );
}
