import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import { useHistory } from "react-router";
import { styled } from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import TableContainer from "@mui/material/TableContainer";
import AdminDeleteBttn from "../AdminDeleteBttn/AdminDeleteBttn";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

function AdminPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <div className="container">
      <Button variant="outlined" onClick={() => history.push("/addProduct")}>
        Add New Device
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              {/* <TableCell align="right">Image</TableCell> */}
              <StyledTableCell align="right">Description</StyledTableCell>
              <StyledTableCell align="right">Display</StyledTableCell>
              <StyledTableCell align="right">Camera</StyledTableCell>
              <StyledTableCell align="right">GPU</StyledTableCell>
              <StyledTableCell align="right">CPU</StyledTableCell>
              <StyledTableCell align="right">RAM</StyledTableCell>
              <StyledTableCell align="right">Storage</StyledTableCell>
              <StyledTableCell align="right">Fingerprint</StyledTableCell>
              <StyledTableCell align="right">Touch-Screen</StyledTableCell>
              <StyledTableCell align="right">Backlit Keyboard</StyledTableCell>
              <StyledTableCell align="right">Magsafe</StyledTableCell>
              <StyledTableCell align="right">USBC</StyledTableCell>
              <StyledTableCell align="right">HDMI</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <StyledTableRow
                key={product.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{product.name}</TableCell>
                <TableCell align="right">{product.price}</TableCell>
                {/* <TableCell align="right">{product.image}</TableCell> */}
                <TableCell align="right">{product.description}</TableCell>
                <TableCell align="right">
                  {product.display ? "Yes, " : "No"} {product.display_info}
                </TableCell>
                <TableCell align="right">
                  {product.camera ? "Yes, " : "No"}
                  {product.camera_info}
                </TableCell>
                <TableCell align="right">
                  {product.graphics_card_info}
                </TableCell>
                <TableCell align="right">{product.processor_info}</TableCell>
                <TableCell align="right">{product.memory_info}</TableCell>
                <TableCell align="right">{product.storage_info}</TableCell>
                <TableCell align="right">
                  {product.fingerprint_sensor ? "Yes" : "No"}
                </TableCell>
                <TableCell align="right">
                  {product.touch_screen ? "Yes" : "No"}
                </TableCell>
                <TableCell align="right">
                  {product.backlit_keyboard ? "Yes" : "No"}
                </TableCell>
                <TableCell align="right">
                  {product.magsafe ? "Yes" : "No"}
                </TableCell>
                <TableCell align="right">
                  {product.usbc_port ? "Yes " : "No"} {product.usbc_port_info}
                </TableCell>
                <TableCell align="right">
                  {product.HDMI_port && "Yes "} {product.HDMI_port_info}
                </TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => (
                      history.push("/editProduct"),
                      dispatch({ type: "PRODUCT_TO_EDIT", payload: product })
                    )}
                  >
                    <EditIcon />
                  </IconButton>

                  <AdminDeleteBttn product={product} />
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default AdminPage;
