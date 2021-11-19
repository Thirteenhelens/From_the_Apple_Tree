import { useState } from "react";
import "./AdminAddProductPage.css";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import Switch from "@mui/material/Switch";
import { useHistory } from "react-router";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";

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
      <form>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <h3>Name</h3>
            <TextField
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              id="standard-basic"
              label="Name"
              variant="standard"
            />
          </Grid>

          <Grid item xs={4}>
            <Button
              type="submit"
              variant="outlined"
              onClick={(e) => {
                e.preventDefault(),
                history.push("/admin"),
                dispatch({ type: "ADD_PRODUCT", payload: newProduct }),
                console.log('WTF')
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
          </Grid>

          <Grid item xs={4}>
            <h3>Price</h3>
            <TextField
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              id="standard-basic"
              label="Price"
              variant="standard"
            />
          </Grid>

          <Grid item xs={4}>
            <h3>Image url</h3>
            <TextField
              value={newProduct.image_URL}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image_URL: e.target.value })
              }
              multiline
              maxRows={3}
              id="standard-basic"
              label="URL"
              variant="standard"
            />
          </Grid>

          <Grid item xs={4}>
            <h3>Description</h3>
            <TextField
              value={newProduct.Description}
              onChange={(e) =>
                setNewProduct({ ...newProduct, Description: e.target.value })
              }
              multiline
              maxRows={3}
              id="standard-basic"
              label="Description"
              variant="standard"
            />
          </Grid>

          <Grid item xs={4}>
            <h3>CPU</h3>
            <TextField
              value={newProduct.cpu_txt}
              onChange={(e) =>
                setNewProduct({ ...newProduct, cpu_txt: e.target.value })
              }
              id="standard-basic"
              label="CPU Info"
              variant="standard"
            />
          </Grid>

          <Grid item xs={4}>
            <h3>HDMI</h3>
            <TextField
              value={newProduct.hdmi_txt}
              onChange={(e) =>
                setNewProduct({ ...newProduct, hdmi_txt: e.target.value })
              }
              id="standard-basic"
              label="HDMI Info"
              variant="standard"
            />
            <br />
            <FormControlLabel
              control={
                <Switch
                  checked={newProduct.hdmi}
                  onChange={() =>
                    setNewProduct({ ...newProduct, hdmi: !newProduct.hdmi })
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
              value={newProduct.usbc_txt}
              onChange={(e) =>
                setNewProduct({ ...newProduct, usbc_txt: e.target.value })
              }
              id="standard-basic"
              label="USBC Info"
              variant="standard"
            />
            <br />
            <FormControlLabel
              control={
                <Switch
                  checked={newProduct.usbc}
                  onChange={() =>
                    setNewProduct({ ...newProduct, usbc: !newProduct.usbc })
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
              value={newProduct.display_txt}
              onChange={(e) =>
                setNewProduct({ ...newProduct, display_txt: e.target.value })
              }
              id="standard-basic"
              label="Display Info"
              variant="standard"
            />
            <br />
            <FormControlLabel
              control={
                <Switch
                  checked={newProduct.display}
                  onChange={() =>
                    setNewProduct({
                      ...newProduct,
                      display: !newProduct.display,
                    })
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
              value={newProduct.camera_txt}
              onChange={(e) =>
                setNewProduct({ ...newProduct, camera_txt: e.target.value })
              }
              id="standard-basic"
              label="Camera Info"
              variant="standard"
            />
            <br />
            <FormControlLabel
              control={
                <Switch
                  checked={newProduct.camera}
                  onChange={() =>
                    setNewProduct({ ...newProduct, camera: !newProduct.camera })
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
              value={newProduct.gpu_txt}
              onChange={(e) =>
                setNewProduct({ ...newProduct, gpu_txt: e.target.value })
              }
              id="standard-basic"
              label="GPU Info"
              variant="standard"
            />
          </Grid>

          <Grid item xs={4}>
            <h3>RAM</h3>
            <TextField
              value={newProduct.ram_txt}
              onChange={(e) =>
                setNewProduct({ ...newProduct, ram_txt: e.target.value })
              }
              id="standard-basic"
              label="RAM Info"
              variant="standard"
            />
          </Grid>

          <Grid item xs={4}>
            <h3>Storage</h3>
            <TextField
              value={newProduct.storage_TXT}
              onChange={(e) =>
                setNewProduct({ ...newProduct, storage_TXT: e.target.value })
              }
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
                  checked={newProduct.fingerPrint}
                  onChange={() =>
                    setNewProduct({
                      ...newProduct,
                      fingerPrint: !newProduct.fingerPrint,
                    })
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
                  checked={newProduct.backlit}
                  onChange={() =>
                    setNewProduct({
                      ...newProduct,
                      backlit: !newProduct.backlit,
                    })
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
                  checked={newProduct.touchScreen}
                  onChange={() =>
                    setNewProduct({
                      ...newProduct,
                      touchScreen: !newProduct.touchScreen,
                    })
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
                  checked={newProduct.magsafe}
                  onChange={() =>
                    setNewProduct({
                      ...newProduct,
                      magsafe: !newProduct.magsafe,
                    })
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

export default AdminAddProductPage;
