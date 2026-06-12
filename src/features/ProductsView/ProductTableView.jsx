import TableBody from "../../components/common/Table/elements/TableBody";
import TableCell from "../../components/common/Table/elements/TableCell";
import TableHead from "../../components/common/Table/elements/TableHead";
import TableHeadCell from "../../components/common/Table/elements/TableHeadCell";
import TableRow from "../../components/common/Table/elements/TableRow";
import Table from "../../components/common/Table/Table";
import { ProductsTableHeaderRow } from "../../data/products";

function ProductTableView({ products }) {
  return (
    <>
      <div>
        <Table>
          <TableRow>
            <TableHead>
              {ProductsTableHeaderRow.map((header) => (
                <TableHeadCell key={header.id}> {header} </TableHeadCell>
              ))}
            </TableHead>
          </TableRow>

          <TableBody>
            <TableRow>
              {products.map((product) => (
                <TableCell key={product.id}> </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}

export default ProductTableView;
