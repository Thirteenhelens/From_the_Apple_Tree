import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import FavoriteProductButton from "../FavoriteProductButton/FavoriteProductButton";

// MUI IMPORTS
import {
  Card,
  Paper,
  Table,
  styled,
  TableRow,
  Collapse,
  Checkbox,
  TableBody,
  TableCell,
  CardMedia,
  IconButton,
  Typography,
  CardHeader,
  CardContent,
  CardActions,
  TableContainer,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckTwoToneIcon from "@mui/icons-material/CheckTwoTone";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";

function ProductCardWithDesc({ product }) {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addToCompare = () => {
    console.log(`adding`);
    dispatch({ type: "ADD_TO_COMPARE", payload: product });
    setChecked(!checked);
  };
  const removeFromCompare = () => {
    console.log(`removing`);
    dispatch({ type: "REMOVE_FROM_COMPARE", payload: product });
    setChecked(!checked);
  };

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
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
    <Card sx={{ maxWidth: 450 }}>
      <CardHeader title={product.name} subheader={product.price} />
      <CardMedia
        height="350"
        component="img"
        alt={product.name}
        image={product.image_url}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <FavoriteProductButton product={product} />
        {checked ? (
          <>
            <Checkbox checked={checked} onChange={removeFromCompare} />
            <p>Remove from compare</p>
          </>
        ) : (
          <>
            <Checkbox checked={checked} onChange={addToCompare} />
            <p>Add to compare</p>
          </>
        )}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit overflow="scroll">
        <CardContent>
          <h3>Additional Information</h3>
          <br />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 200 }} aria-label="simple table">
              <TableBody>
                <StyledTableRow>
                  <TableCell align="left"> HDMI port:</TableCell>
                  <TableCell align="right">
                    {product.hdmi_port ? (
                      <div>
                        <CheckTwoToneIcon color="success" />
                        {product.hdmi_port_info}
                      </div>
                    ) : (
                      <CloseTwoToneIcon />
                    )}
                  </TableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <TableCell align="left"> Backlit Keyboard:</TableCell>
                  <TableCell align="right">
                    {product.backlit_keyboard ? (
                      <CheckTwoToneIcon color="success" />
                    ) : (
                      <CloseTwoToneIcon />
                    )}
                  </TableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <TableCell align="left">Storage Capacity:</TableCell>
                  <TableCell align="right">{product.storage_info}</TableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <TableCell align="left">Webcam:</TableCell>
                  <TableCell align="right">
                    {product.backlit_keyboard ? (
                      <CheckTwoToneIcon color="success" />
                    ) : (
                      <CloseTwoToneIcon />
                    )}
                    {product.camera_info}
                  </TableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <TableCell align="left">Touch Screen:</TableCell>
                  <TableCell align="right">
                    {product.touch_screen ? (
                      <CheckTwoToneIcon color="success" />
                    ) : (
                      <CloseTwoToneIcon />
                    )}
                  </TableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <TableCell align="left">Fingerprint Sensor:</TableCell>
                  <TableCell align="right">
                    {product.fingerprint_sensor ? (
                      <CheckTwoToneIcon color="success" />
                    ) : (
                      <CloseTwoToneIcon />
                    )}
                  </TableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <TableCell align="left">Magsafe:</TableCell>
                  <TableCell align="right">
                    {product.magsafe ? (
                      <CheckTwoToneIcon color="success" />
                    ) : (
                      <CloseTwoToneIcon />
                    )}
                  </TableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default ProductCardWithDesc;
