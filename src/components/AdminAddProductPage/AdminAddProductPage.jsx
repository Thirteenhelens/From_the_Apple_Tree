import { useState } from "react";
import { Box } from "@mui/system";
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

  const demoFill = () =>
    setNewProduct({
      name: "(New) MacBook Pro 2021",
      price: "$2400",
      magsafe: true,
      touchScreen: false,
      backlit: true,
      fingerPrint: true,
      storage_TXT: "1tb",
      ram_txt: "32gb",
      gpu_txt: "16-core M1 Pro Max",
      camera: true,
      camera_txt: "1080p",
      display: true,
      display_txt: '16" 4k @ 120hz',
      usbc: true,
      usbc_txt: "4",
      hdmi: true,
      hdmi_txt: "HDMI 2.0",
      cpu_txt: "M1 Pro Max",
      Description:
        `Apple's newest and best in class laptop. One of the best portable devices for anything
        involving graphical design, video editing, and anything computing intensive.`,
      image_URL:
        "https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/hero_intro_endframe__e6khcva4hkeq_large.jpg",
    });

  return (
    <div className="inputs">
      <h1>Add a new product</h1>

      <Box sx={{ ml: 35, mr: 10 }}>
        <div className="buttonContainer">
          <div onClick={demoFill}>
            <p className="secret">heheheehehehe</p>
          </div>
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
