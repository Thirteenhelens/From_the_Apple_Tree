// MUI IMPORTS
import {
  Box,
  Grid,
  Switch,
  Button,
  TextField,
  FormControlLabel,
} from "@mui/material";

import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";

function AdminEditProduct() {
  const history = useHistory();
  const dispatch = useDispatch();
  const productToEdit = useSelector((store) => store.productToEdit);

  const handleEdits = (event, property) => {
    dispatch({
      type: "EDIT_PRODUCT",
      payload: { property: property, value: event.target.value },
    });
  };

  const handleCheckedEdit = (event, property) => {
    dispatch({
      type: "EDIT_PRODUCT",
      payload: { property: property, value: event.target.checked },
    });
  };

  return (
    <div>
      <h1>Edit product here</h1>

      <Box sx={{ ml: 35, mr: 10 }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch({ type: "UPDATE_PRODUCT", payload: productToEdit });
            history.goBack();
          }}
        >
          <div className="buttonContainer">
            <Button type="submit" variant="outlined" sx={{ mr: 1 }}>
              Save Changes
            </Button>
            <Button
              color="error"
              type="submit"
              variant="contained"
              onClick={() => history.push("/admin")}
            >
              Cancel
            </Button>
          </div>

          <Grid container spacing={2}>
            <Grid item xs={4} />

            <Grid item xs={4}>
              <h3>Name</h3>
              <TextField
                label="Name"
                color="secondary"
                variant="standard"
                id="standard-basic"
                value={productToEdit.name}
                onChange={(event) => handleEdits(event, "name")}
              />
            </Grid>

            <Grid item xs={4} />

            <Grid item xs={4}>
              <h3>Price</h3>
              <TextField
                label="Price"
                color="secondary"
                variant="standard"
                id="standard-basic"
                value={productToEdit.price}
                onChange={(event) => handleEdits(event, "price")}
              />
            </Grid>

            <Grid item xs={4}>
              <h3>Image url</h3>
              <TextField
                multiline
                label="URL"
                maxRows={3}
                color="secondary"
                variant="standard"
                id="standard-basic"
                value={productToEdit.image_url}
                onChange={(event) => handleEdits(event, "image_url")}
              />
            </Grid>

            <Grid item xs={4}>
              <h3>Description</h3>
              <TextField
                multiline
                maxRows={3}
                color="secondary"
                variant="standard"
                id="standard-basic"
                label="Description"
                value={productToEdit.description}
                onChange={(event) => handleEdits(event, "description")}
              />
            </Grid>

            <Grid item xs={4}>
              <h3>CPU</h3>
              <TextField
                label="CPU Info"
                color="secondary"
                variant="standard"
                id="standard-basic"
                value={productToEdit.processor_info}
                onChange={(event) => handleEdits(event, "processor_info")}
              />
            </Grid>

            <Grid item xs={4}>
              <h3>HDMI</h3>
              <TextField
                label="HDMI Info"
                color="secondary"
                variant="standard"
                id="standard-basic"
                value={productToEdit.hdmi_port_info}
                onChange={(event) => handleEdits(event, "hdmi_port_info")}
              />
              <br />
              <FormControlLabel
                control={
                  <Switch
                    name="hdmi"
                    color="secondary"
                    checked={productToEdit.hdmi_port}
                    onChange={(event) => handleCheckedEdit(event, "hdmi_port")}
                  />
                }
                label="Product has this"
              />
            </Grid>

            <Grid item xs={4}>
              <h3>USBC</h3>
              <TextField
                label="USBC Info"
                color="secondary"
                variant="standard"
                id="standard-basic"
                value={productToEdit.usbc_port_info}
                onChange={(event) => handleEdits(event, "usbc_port_info")}
              />
              <br />
              <FormControlLabel
                control={
                  <Switch
                    name="usbc"
                    color="secondary"
                    checked={productToEdit.usbc_port}
                    onChange={(event) => handleCheckedEdit(event, "usbc_port")}
                  />
                }
                label="Product has this"
              />
            </Grid>

            <Grid item xs={4}>
              <h3>Display</h3>
              <TextField
                color="secondary"
                variant="standard"
                id="standard-basic"
                label="Display Info"
                value={productToEdit.display_info}
                onChange={(event) => handleEdits(event, "display_info")}
              />
              <br />
              <FormControlLabel
                control={
                  <Switch
                    name="Display"
                    color="secondary"
                    checked={productToEdit.display}
                    onChange={(event) => handleCheckedEdit(event, "display")}
                  />
                }
                label="Product has this"
              />
            </Grid>

            <Grid item xs={4}>
              <h3>Camera</h3>
              <TextField
                color="secondary"
                variant="standard"
                id="standard-basic"
                label="Camera Info"
                value={productToEdit.camera_info}
                onChange={(event) => handleEdits(event, "camera_info")}
              />
              <br />
              <FormControlLabel
                control={
                  <Switch
                    name="camera"
                    color="secondary"
                    checked={productToEdit.camera}
                    onChange={(event) => handleCheckedEdit(event, "camera")}
                  />
                }
                label="Product has this"
              />
            </Grid>

            <Grid item xs={4}>
              <h3>GPU</h3>
              <TextField
                label="GPU Info"
                color="secondary"
                variant="standard"
                id="standard-basic"
                value={productToEdit.graphics_card_info}
                onChange={(event) => handleEdits(event, "graphics_card_info")}
              />
            </Grid>

            <Grid item xs={4}>
              <h3>RAM</h3>
              <TextField
                label="RAM Info"
                color="secondary"
                variant="standard"
                id="standard-basic"
                value={productToEdit.memory_info}
                onChange={(event) => handleEdits(event, "memory_info")}
              />
            </Grid>

            <Grid item xs={4}>
              <h3>Storage</h3>
              <TextField
                color="secondary"
                variant="standard"
                id="standard-basic"
                label="Storage Info"
                value={productToEdit.storage_info}
                onChange={(event) => handleEdits(event, "storage_info")}
              />
            </Grid>

            <Grid item xs={4}>
              <h3>FingerPrint Sensor</h3>
              <FormControlLabel
                control={
                  <Switch
                    color="secondary"
                    name="fingerprint"
                    checked={productToEdit.fingerprint_sensor}
                    onChange={(event) =>
                      handleCheckedEdit(event, "fingerprint_sensor")
                    }
                  />
                }
                label="Product has this"
              />
            </Grid>

            <Grid item xs={4}>
              <h3>Backlit Keyboard</h3>
              <FormControlLabel
                control={
                  <Switch
                    name="backlit"
                    color="secondary"
                    checked={productToEdit.backlit_keyboard}
                    onChange={(event) =>
                      handleCheckedEdit(event, "backlit_keyboard")
                    }
                  />
                }
                label="Product has this"
              />
            </Grid>

            <Grid item xs={4}>
              <h3>Touch Screen</h3>
              <FormControlLabel
                control={
                  <Switch
                    color="secondary"
                    name="touch screen"
                    checked={productToEdit.touch_screen}
                    onChange={(event) =>
                      handleCheckedEdit(event, "touch_screen")
                    }
                  />
                }
                label="Product has this"
              />
            </Grid>

            <Grid item xs={4}>
              <h3>Magsafe</h3>
              <FormControlLabel
                control={
                  <Switch
                    name="magsafe"
                    color="secondary"
                    checked={productToEdit.magsafe}
                    onChange={(event) => handleCheckedEdit(event, "magsafe")}
                  />
                }
                label="Product has this"
              />
            </Grid>
          </Grid>
        </form>
      </Box>
    </div>
  );
}

export default AdminEditProduct;
