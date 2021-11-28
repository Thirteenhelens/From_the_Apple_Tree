import "./CompareProductsPage.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import { useDispatch, useSelector } from "react-redux";
import TableContainer from "@mui/material/TableContainer";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import CheckTwoToneIcon from "@mui/icons-material/CheckTwoTone";
import CompareProductCard from "../CompareProductCard/CompareProductCard";

function CompareProductsPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const compare = useSelector((store) => store.compare);

  const handleBack = () => {
    history.push("/user");
    dispatch({ type: "CLEAR_COMPARE" });
  };

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <Box sx={{ ml: 5, mr: 5 }}>
      {compare.length === 0 ? (
        <Typography
          variant="h5"
          sx={{ mt: 20, mb: 50 }}
          className="noDevicesText"
        >
          It looks like you haven't added any devices to compare! Please return
          after doing so. <Link to="/user">Home</Link>
        </Typography>
      ) : (
        <div>
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

          <div>
            <Button color="error" variant="contained" onClick={handleBack}>
              Back
            </Button>
          </div>
          
          <br />

          <TableContainer component={Paper} elevation={5}>
            <Table sx={{ minWidth: 650 }} aria-label="customized table">
              <colgroup>
                <col style={{ width: "29%" }} />
                <col style={{ width: "33%" }} />
                <col style={{ width: "33%" }} />
              </colgroup>
              <TableBody>
                <StyledTableRow
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
                </StyledTableRow>

                <StyledTableRow
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
                </StyledTableRow>

                <StyledTableRow
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
                </StyledTableRow>

                <StyledTableRow
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
                </StyledTableRow>

                <StyledTableRow
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
                </StyledTableRow>

                <StyledTableRow
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
                </StyledTableRow>

                <StyledTableRow
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
                </StyledTableRow>

                <StyledTableRow
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
                </StyledTableRow>

                <StyledTableRow
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
                </StyledTableRow>

                <StyledTableRow
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
                </StyledTableRow>

                <StyledTableRow
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
                </StyledTableRow>

                <StyledTableRow
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
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </Box>
  );
}

export default CompareProductsPage;
