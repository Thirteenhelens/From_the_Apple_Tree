import { useState } from "react";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import Switch from "@mui/material/Switch";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";

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

  return (
    <div>
      <h1>Edit product here</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(`You need to change this`);
          // dispatch({ type: "ADD_PRODUCT", payload: newProduct });
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <p> </p>
          </Grid>

          <Grid item xs={4}>
            <h3>Name</h3>
            <TextField
              value={productToEdit.name}
              onChange={(event) => handleEdits(event, 'name')}
              id="standard-basic"
              label="Name"
              variant="standard"
            />
          </Grid>

          <Grid item xs={4}>
            <Button type="submit" variant="outlined">
              Save Changes
            </Button>
            <Button
              type="submit"
              color="error"
              variant="contained"
              onClick={() => history.push("/admin")}
            >
              Cancel
            </Button>
          </Grid>

          <Grid item xs={4}>
            <h3>Price</h3>
            <TextField
              value={productToEdit.price}
              onChange={(event) => handleEdits(event, "price")}
              id="standard-basic"
              label="Price"
              variant="standard"
            />
          </Grid>

          <Grid item xs={4}>
            <h3>Image url</h3>
            <TextField
              multiline
              maxRows={3}
              value={productToEdit.image_url}
              onChange={(event) => handleEdits(event, 'image_url')}
              id="standard-basic"
              label="URL"
              variant="standard"
            />
          </Grid>

          <Grid item xs={4}>
            <h3>Description</h3>
            <TextField
              multiline
              maxRows={3}
              value={productToEdit.description}
              onChange={(event) => handleEdits(event, 'description')}
              id="standard-basic"
              label="Description"
              variant="standard"
            />
          </Grid>

          <Grid item xs={4}>
            <h3>CPU</h3>
            <TextField
              value={productToEdit.processor_info}
              onChange={(event) => handleEdits(event, 'processor_info')}
              id="standard-basic"
              label="CPU Info"
              variant="standard"
            />
          </Grid>

          <Grid item xs={4}>
            <h3>HDMI</h3>
            <TextField
              value={productToEdit.hdmi_port_info}
              onChange={(event) => handleEdits(event, 'hdmi_port_info')}
              id="standard-basic"
              label="HDMI Info"
              variant="standard"
            />
            <br />
            <FormControlLabel
              control={
                <Switch
                  checked={productToEdit.hdmi_port}
                  onChange={
                    () => console.log(e.target.value)
                    // setNewProduct({ ...newProduct, hdmi: !newProduct.hdmi })
                  }
                  name="hdmi"
                  color="primary"
                />
              }
              label="Product has this"
            />
          </Grid>

          <Grid item xs={4}>
            <h3>USBC</h3>
            <TextField
              value={productToEdit.usbc_port_info}
              onChange={(event) => handleEdits(event, 'usbc_port_info')}
              id="standard-basic"
              label="USBC Info"
              variant="standard"
            />
            <br />
            <FormControlLabel
              control={
                <Switch
                  checked={productToEdit.usbc_port}
                  onChange={
                    () => console.log(e.target.value)
                    // setNewProduct({ ...newProduct, usbc: !newProduct.usbc })
                  }
                  name="usbc"
                  color="primary"
                />
              }
              label="Product has this"
            />
          </Grid>

          <Grid item xs={4}>
            <h3>Display</h3>
            <TextField
              value={productToEdit.display_info}
              onChange={(event) => handleEdits(event, 'display_info')}
              id="standard-basic"
              label="Display Info"
              variant="standard"
            />
            <br />
            <FormControlLabel
              control={
                <Switch
                  checked={productToEdit.display}
                  onChange={
                    () => console.log(e.target.value)
                    // setNewProduct({ ...newProduct, display: !newProduct.display })
                  }
                  name="Display"
                  color="primary"
                />
              }
              label="Product has this"
            />
          </Grid>

          <Grid item xs={4}>
            <h3>Camera</h3>
            <TextField
              value={productToEdit.camera_info}
              onChange={(event) => handleEdits(event, 'camera_info')}
              id="standard-basic"
              label="Camera Info"
              variant="standard"
            />
            <br />
            <FormControlLabel
              control={
                <Switch
                  checked={productToEdit.camera}
                  onChange={
                    () => console.log(e.target.value)
                    // setNewProduct({ ...newProduct, camera: !newProduct.camera })
                  }
                  name="camera"
                  color="primary"
                />
              }
              label="Product has this"
            />
          </Grid>

          <Grid item xs={4}>
            <h3>GPU</h3>
            <TextField
              value={productToEdit.graphics_card_info}
              onChange={(event) => handleEdits(event, 'graphics_card_info')}
              id="standard-basic"
              label="GPU Info"
              variant="standard"
            />
          </Grid>

          <Grid item xs={4}>
            <h3>RAM</h3>
            <TextField
              value={productToEdit.memory_info}
              onChange={(event) => handleEdits(event, 'memory_info')}
              id="standard-basic"
              label="RAM Info"
              variant="standard"
            />
          </Grid>

          <Grid item xs={4}>
            <h3>Storage</h3>
            <TextField
              value={productToEdit.storage_info}
              onChange={(event) => handleEdits(event, 'storage_info')}
              id="standard-basic"
              label="Storage Info"
              variant="standard"
            />
          </Grid>

          <Grid item xs={4}>
            <h3>FingerPrint Sensor</h3>
            <FormControlLabel
              control={
                <Switch
                  checked={productToEdit.fingerprint_sensor}
                  onChange={
                    () => console.log(e.target.value)
                    // setNewProduct({
                    //   ...newProduct,
                    //   fingerPrint: !newProduct.fingerPrint,
                    // })
                  }
                  name="fingerprint"
                  color="primary"
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
                  checked={productToEdit.backlit_keyboard}
                  onChange={
                    () => console.log(e.target.value)
                    // setNewProduct({ ...newProduct, backlit: !newProduct.backlit })
                  }
                  name="backlit"
                  color="primary"
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
                  checked={productToEdit.touch_screen}
                  onChange={
                    () => console.log(e.target.value)
                    // setNewProduct({
                    //   ...newProduct,
                    //   touchScreen: !newProduct.touchScreen,
                    // })
                  }
                  name="touch screen"
                  color="primary"
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
                  checked={productToEdit.magsafe}
                  onChange={
                    () => console.log(e.target.value)
                    // setNewProduct({ ...newProduct, magsafe: !newProduct.magsafe })
                  }
                  name="magsafe"
                  color="primary"
                />
              }
              label="Product has this"
            />
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default AdminEditProduct;
