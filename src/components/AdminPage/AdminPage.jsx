import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import TableContainer from "@mui/material/TableContainer";
import AdminDeleteBttn from "../AdminDeleteBttn/AdminDeleteBttn";

function AdminPage() {
  const history = useHistory();
  const productInfo = useSelector((store) => store.productInfo);

  return (
    <div className="container">
      <Button variant="outlined" onClick={() => history.push("/addProduct")}>
        Add New Device
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Price</TableCell>
              {/* <TableCell align="right">Image</TableCell> */}
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Display</TableCell>
              <TableCell align="right">Camera</TableCell>
              <TableCell align="right">GPU</TableCell>
              <TableCell align="right">CPU</TableCell>
              <TableCell align="right">RAM</TableCell>
              <TableCell align="right">Storage</TableCell>
              <TableCell align="right">Fingerprint</TableCell>
              <TableCell align="right">Touch-Screen</TableCell>
              <TableCell align="right">Backlit Keyboard</TableCell>
              <TableCell align="right">Magsafe</TableCell>
              <TableCell align="right">USBC</TableCell>
              <TableCell align="right">HDMI</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productInfo.map((product) => (
              <TableRow
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default AdminPage;
