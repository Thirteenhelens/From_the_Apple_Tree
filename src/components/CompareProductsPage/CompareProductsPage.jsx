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
import CheckTwoToneIcon from "@mui/icons-material/CheckTwoTone";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import CompareProductCard from "../CompareProductCard/CompareProductCard";

function CompareProductsPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const compare = useSelector((store) => store.compare);

  const colWidth = compare.length === 1 ? { width: "29%" } : { width: "33%" };

  const handleBack = () => {
    history.push("/user");
    dispatch({ type: "CLEAR_COMPARE" });
  };

  return (
    <div className="container">
      {compare.length === 0 ? (
        <p>
          It looks like you haven't added any devices to compare! Please return
          after doing so. <Link to="/user">Home</Link>
        </p>
      ) : (
        <>
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
              <colgroup>
                <col style={colWidth} />
                <col style={{ width: "33%" }} />
                <col style={{ width: "33%" }} />
              </colgroup>
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
                    Webcam
                  </TableCell>

                  <TableCell component="th" scope="row" align="center">
                    {compare[0]?.camera ? (
                      <CheckTwoToneIcon color="success" />
                    ) : (
                      <CloseTwoToneIcon />
                    )}
                    {compare[0]?.camera_info}
                  </TableCell>

                  <TableCell component="th" scope="row" align="center">
                    {compare[1] &&
                      (compare[1]?.camera ? (
                        <>
                          <CheckTwoToneIcon color="success" />
                          {compare[1]?.camera_info}
                        </>
                      ) : (
                        <CloseTwoToneIcon />
                      ))}
                  </TableCell>
                </TableRow>

                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Display
                  </TableCell>

                  <TableCell component="th" scope="row" align="center">
                    {compare[0]?.display ? (
                      <CheckTwoToneIcon color="success" />
                    ) : (
                      <CloseTwoToneIcon />
                    )}
                    {compare[0]?.display_info}
                  </TableCell>

                  <TableCell component="th" scope="row" align="center">
                    {compare[1] &&
                      (compare[1]?.display ? (
                        <>
                          <CheckTwoToneIcon color="success" />
                          {compare[1]?.display_info}
                        </>
                      ) : (
                        <CloseTwoToneIcon />
                      ))}
                  </TableCell>
                </TableRow>

                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    HDMI Port
                  </TableCell>

                  <TableCell component="th" scope="row" align="center">
                    {compare[0]?.hdmi_port ? (
                      <>
                        <CheckTwoToneIcon color="success" />
                        {compare[0]?.hdmi_port_info}
                      </>
                    ) : (
                      <CloseTwoToneIcon />
                    )}
                  </TableCell>

                  <TableCell component="th" scope="row" align="center">
                    {compare[1] &&
                      (compare[1]?.hdmi_port ? (
                        <>
                          <CheckTwoToneIcon color="success" />
                          {compare[1]?.hdmi_port_info}
                        </>
                      ) : (
                        <CloseTwoToneIcon />
                      ))}
                  </TableCell>
                </TableRow>

                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    USBC Port
                  </TableCell>

                  <TableCell component="th" scope="row" align="center">
                    {compare[0]?.usbc_port ? (
                      <>
                        <CheckTwoToneIcon color="success" />
                        {compare[0]?.usbc_port_info}
                      </>
                    ) : (
                      <CloseTwoToneIcon />
                    )}
                  </TableCell>

                  <TableCell component="th" scope="row" align="center">
                    {compare[1] &&
                      (compare[1]?.usbc_port ? (
                        <>
                          <CheckTwoToneIcon color="success" />
                          {compare[1]?.usbc_port_info}
                        </>
                      ) : (
                        <CloseTwoToneIcon />
                      ))}
                  </TableCell>
                </TableRow>

                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Magsafe
                  </TableCell>

                  <TableCell component="th" scope="row" align="center">
                    {compare[0]?.magsafe ? (
                      <CheckTwoToneIcon color="success" />
                    ) : (
                      <CloseTwoToneIcon />
                    )}
                  </TableCell>

                  <TableCell component="th" scope="row" align="center">
                    {compare[1] &&
                      (compare[1]?.magsafe ? (
                        <CheckTwoToneIcon color="success" />
                      ) : (
                        <CloseTwoToneIcon />
                      ))}
                  </TableCell>
                </TableRow>

                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Touch Screen
                  </TableCell>

                  <TableCell component="th" scope="row" align="center">
                    {compare[0]?.touch_screen ? (
                      <CheckTwoToneIcon color="success" />
                    ) : (
                      <CloseTwoToneIcon />
                    )}
                  </TableCell>

                  <TableCell component="th" scope="row" align="center">
                    {compare[1] &&
                      (compare[1]?.touch_screen ? (
                        <CheckTwoToneIcon color="success" />
                      ) : (
                        <CloseTwoToneIcon />
                      ))}
                  </TableCell>
                </TableRow>

                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Fingerprint Sensor
                  </TableCell>

                  <TableCell component="th" scope="row" align="center">
                    {compare[0]?.fingerprint_sensor ? (
                      <CheckTwoToneIcon color="success" />
                    ) : (
                      <CloseTwoToneIcon />
                    )}
                  </TableCell>

                  <TableCell component="th" scope="row" align="center">
                    {compare[1] &&
                      (compare[1]?.fingerprint_sensor ? (
                        <CheckTwoToneIcon color="success" />
                      ) : (
                        <CloseTwoToneIcon />
                      ))}
                  </TableCell>
                </TableRow>

                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Backlit Keyboard
                  </TableCell>

                  <TableCell component="th" scope="row" align="center">
                    {compare[0]?.backlit_keyboard ? (
                      <CheckTwoToneIcon color="success" />
                    ) : (
                      <CloseTwoToneIcon />
                    )}
                  </TableCell>

                  <TableCell component="th" scope="row" align="center">
                    {compare[1] &&
                      (compare[1]?.backlit_keyboard ? (
                        <CheckTwoToneIcon color="success" />
                      ) : (
                        <CloseTwoToneIcon />
                      ))}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </div>
  );
}

export default CompareProductsPage;
