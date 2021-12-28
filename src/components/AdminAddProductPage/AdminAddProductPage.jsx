// MUI IMPORTS
import {
  Box,
  Grid,
  Switch,
  Button,
  TextField,
  FormControlLabel,
} from "@mui/material";

import { useState } from "react";
import "./AdminAddProductPage.css";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

function AdminAddProductPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    magsafe: false,
    touchScreen: false,
    backlit: false,
    fingerPrint: false,
    storage_TXT: "",
    ram_txt: "",
    gpu_txt: "",
    camera: false,
    camera_txt: "",
    display: false,
    display_txt: "",
    usbc: false,
    usbc_txt: "",
    hdmi: false,
    hdmi_txt: "",
    cpu_txt: "",
    Description: "",
    image_URL: "",
  });

  return (
    <div className="inputs">
      <h1>Add a new product</h1>

      <Box sx={{ ml: 35, mr: 10 }}>
        <div className="buttonContainer">
          <Button
            sx={{ mr: 1 }}
            type="submit"
            variant="outlined"
            onClick={(e) => {
              e.preventDefault(),
                history.push("/admin"),
                console.log("Saving new product"),
                dispatch({ type: "ADD_PRODUCT", payload: newProduct });
            }}
          >
            Save Device
          </Button>
          <Button
            type="cancel"
            color="error"
            variant="outlined"
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
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
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
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
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
              value={newProduct.image_URL}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image_URL: e.target.value })
              }
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
              value={newProduct.Description}
              onChange={(e) =>
                setNewProduct({ ...newProduct, Description: e.target.value })
              }
            />
          </Grid>

          <Grid item xs={4}>
            <h3>CPU</h3>
            <TextField
              label="CPU Info"
              color="secondary"
              variant="standard"
              id="standard-basic"
              value={newProduct.cpu_txt}
              onChange={(e) =>
                setNewProduct({ ...newProduct, cpu_txt: e.target.value })
              }
            />
          </Grid>

          <Grid item xs={4}>
            <h3>HDMI</h3>
            <TextField
              label="HDMI Info"
              color="secondary"
              variant="standard"
              id="standard-basic"
              value={newProduct.hdmi_txt}
              onChange={(e) =>
                setNewProduct({ ...newProduct, hdmi_txt: e.target.value })
              }
            />
            <br />
            <FormControlLabel
              control={
                <Switch
                  name="hdmi"
                  color="secondary"
                  checked={newProduct.hdmi}
                  onChange={() =>
                    setNewProduct({ ...newProduct, hdmi: !newProduct.hdmi })
                  }
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
              value={newProduct.usbc_txt}
              onChange={(e) =>
                setNewProduct({ ...newProduct, usbc_txt: e.target.value })
              }
            />
            <br />
            <FormControlLabel
              control={
                <Switch
                  name="usbc"
                  color="secondary"
                  checked={newProduct.usbc}
                  onChange={() =>
                    setNewProduct({ ...newProduct, usbc: !newProduct.usbc })
                  }
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
              value={newProduct.display_txt}
              onChange={(e) =>
                setNewProduct({ ...newProduct, display_txt: e.target.value })
              }
            />
            <br />
            <FormControlLabel
              control={
                <Switch
                  name="Display"
                  color="secondary"
                  checked={newProduct.display}
                  onChange={() =>
                    setNewProduct({
                      ...newProduct,
                      display: !newProduct.display,
                    })
                  }
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
              value={newProduct.camera_txt}
              onChange={(e) =>
                setNewProduct({ ...newProduct, camera_txt: e.target.value })
              }
            />
            <br />
            <FormControlLabel
              control={
                <Switch
                  name="camera"
                  color="secondary"
                  checked={newProduct.camera}
                  onChange={() =>
                    setNewProduct({
                      ...newProduct,
                      camera: !newProduct.camera,
                    })
                  }
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
              value={newProduct.gpu_txt}
              onChange={(e) =>
                setNewProduct({ ...newProduct, gpu_txt: e.target.value })
              }
            />
          </Grid>

          <Grid item xs={4}>
            <h3>RAM</h3>
            <TextField
              label="RAM Info"
              color="secondary"
              variant="standard"
              id="standard-basic"
              value={newProduct.ram_txt}
              onChange={(e) =>
                setNewProduct({ ...newProduct, ram_txt: e.target.value })
              }
            />
          </Grid>

          <Grid item xs={4}>
            <h3>Storage</h3>
            <TextField
              color="secondary"
              variant="standard"
              id="standard-basic"
              label="Storage Info"
              value={newProduct.storage_TXT}
              onChange={(e) =>
                setNewProduct({ ...newProduct, storage_TXT: e.target.value })
              }
            />
          </Grid>

          <Grid item xs={4}>
            <h3>FingerPrint Sensor</h3>
            <FormControlLabel
              control={
                <Switch
                  color="secondary"
                  name="fingerprint"
                  checked={newProduct.fingerPrint}
                  onChange={() =>
                    setNewProduct({
                      ...newProduct,
                      fingerPrint: !newProduct.fingerPrint,
                    })
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
                  checked={newProduct.backlit}
                  onChange={() =>
                    setNewProduct({
                      ...newProduct,
                      backlit: !newProduct.backlit,
                    })
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
                  checked={newProduct.touchScreen}
                  onChange={() =>
                    setNewProduct({
                      ...newProduct,
                      touchScreen: !newProduct.touchScreen,
                    })
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
                  checked={newProduct.magsafe}
                  onChange={() =>
                    setNewProduct({
                      ...newProduct,
                      magsafe: !newProduct.magsafe,
                    })
                  }
                />
              }
              label="Product has this"
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default AdminAddProductPage;
