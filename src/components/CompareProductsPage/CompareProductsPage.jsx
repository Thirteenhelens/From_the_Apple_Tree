import "./CompareProductsPage.css";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import CompareProductCard from "../CompareProductCard/CompareProductCard";

function CompareProductsPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const compare = useSelector((store) => store.compare);

  const handleBack = () => {
    history.push("/user");
    dispatch({ type: "CLEAR_COMPARE" });
  };

  return (
    <div className="container">
      {compare.length === 0 && (
        <p>
          It looks like you haven't added any devices to compare! Please return
          after doing so. <Link to="/user">Home</Link>
        </p>
      )}

      <Button variant="outlined" color="error" onClick={handleBack}>
        Back
      </Button>

      <Grid
        container
        spacing={10}
        direction="row"
        alignItems="flex-start"
        justifyContent="flex-start"
      >
        <Grid item xs={4}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1>Compare</h1>
          <h1>Devices</h1>
        </Grid>
        {compare?.map((product) => {
          return (
            <Grid item xs={4} key={product.id}>
              <CompareProductCard product={product} key={product.id} />
            </Grid>
          );
        })}
      </Grid>

      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                CPU
              </TableCell>

              <TableCell component="th" scope="row" align="center">
                {compare[0]?.processor_info}
              </TableCell>

              <TableCell component="th" scope="row" align="center">
                {compare[1]?.processor_info}
              </TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Graphics
              </TableCell>

              <TableCell component="th" scope="row" align="center">
                {compare[0]?.graphics_card_info}
              </TableCell>

              <TableCell component="th" scope="row" align="center">
                {compare[1]?.graphics_card_info}
              </TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                RAM
              </TableCell>

              <TableCell component="th" scope="row" align="center">
                {compare[0]?.memory_info}
              </TableCell>

              <TableCell component="th" scope="row" align="center">
                {compare[1]?.memory_info}
              </TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Storage
              </TableCell>

              <TableCell component="th" scope="row" align="center">
                {compare[0]?.storage_info}
              </TableCell>

              <TableCell component="th" scope="row" align="center">
                {compare[1]?.storage_info}
              </TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Camera
              </TableCell>

              <TableCell component="th" scope="row" align="center">
                {compare[0]?.camera ? "Yes, " : "No"}
                {compare[0]?.camera_info}
              </TableCell>

              <TableCell component="th" scope="row" align="center">
                {compare[1]?.camera ? "Yes, " : "No"}
                {compare[1]?.camera_info}
              </TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Display
              </TableCell>

              <TableCell component="th" scope="row" align="center">
                {compare[0]?.display ? "Yes, " : "No"}
                {compare[0]?.display_info}
              </TableCell>

              <TableCell component="th" scope="row" align="center">
                {compare[1]?.display ? "Yes, " : "No"}
                {compare[1]?.display_info}
              </TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                HDMI Port
              </TableCell>

              <TableCell component="th" scope="row" align="center">
                {compare[0]?.hdmi_port ? "Yes, " : "No"}
                {compare[0]?.hdmi_port_info}
              </TableCell>

              <TableCell component="th" scope="row" align="center">
                {compare[1]?.hdmi_port ? "Yes, " : "No"}
                {compare[1]?.hdmi_port_info}
              </TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                USBC Port
              </TableCell>

              <TableCell component="th" scope="row" align="center">
                {compare[0]?.usbc_port ? "Yes, " : "No"}
                {compare[0]?.usbc_port_info}
              </TableCell>

              <TableCell component="th" scope="row" align="center">
                {compare[1]?.usbc_port ? "Yes, " : "No"}
                {compare[1]?.usbc_port_info}
              </TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Magsafe
              </TableCell>

              <TableCell component="th" scope="row" align="center">
                {compare[0]?.magsafe ? "Yes" : "No"}
              </TableCell>

              <TableCell component="th" scope="row" align="center">
                {compare[1]?.magsafe ? "Yes" : "No"}
              </TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Touch Screen
              </TableCell>

              <TableCell component="th" scope="row" align="center">
                {compare[0]?.touch_screen ? "Yes" : "No"}
              </TableCell>

              <TableCell component="th" scope="row" align="center">
                {compare[1]?.touch_screen ? "Yes" : "No"}
              </TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Fingerprint Sensor
              </TableCell>

              <TableCell component="th" scope="row" align="center">
                {compare[0]?.fingerprint_sensor ? "Yes" : "No"}
              </TableCell>

              <TableCell component="th" scope="row" align="center">
                {compare[1]?.fingerprint_sensor ? "Yes" : "No"}
              </TableCell>
            </TableRow>

            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Backlit Keyboard
              </TableCell>

              <TableCell component="th" scope="row" align="center">
                {compare[0]?.backlit_keyboard ? "Yes" : "No"}
              </TableCell>

              <TableCell component="th" scope="row" align="center">
                {compare[1]?.backlit_keyboard ? "Yes" : "No"}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CompareProductsPage;
