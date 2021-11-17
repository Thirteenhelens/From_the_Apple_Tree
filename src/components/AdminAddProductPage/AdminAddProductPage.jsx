import { useState } from "react";
import { Button } from "@mui/material";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";

function AdminAddProductPage() {
  const [newProduct, setNewProduct] = useState({
    magsafe: false,
    touchScreen: false,
    backlit: false,
    fingerPrint: false,
    storage: false,
    storage_TXT: "",
    ram: false,
    ram_txt: "",
    gpu: false,
    gpu_txt: "",
    camera: false,
    camera_txt: "",
    display: false,
    display_txt: "",
    usbc: false,
    usbc_txt: "",
    hdmi: false,
    hdmi_txt: "",
    cpu: false,
    cpu_txt: "",
  });

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <form
        onSubmit={(e) => {
          e.preventDefault(), console.log(newProduct);
        }}
      >
        <Button type="submit" variant="outlined">
          Save product
        </Button>
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
        <Switch
          checked={newProduct.cpu}
          onChange={() =>
            setNewProduct({ ...newProduct, cpu: !newProduct.cpu })
          }
          name="cpu"
          color="primary"
        />

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
        <Switch
          checked={newProduct.hdmi}
          onChange={() =>
            setNewProduct({ ...newProduct, hdmi: !newProduct.hdmi })
          }
          name="hdmi"
          color="primary"
        />

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
        <Switch
          checked={newProduct.usbc}
          onChange={() =>
            setNewProduct({ ...newProduct, usbc: !newProduct.usbc })
          }
          name="usbc"
          color="primary"
        />

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
        <Switch
          checked={newProduct.display}
          onChange={() =>
            setNewProduct({ ...newProduct, display: !newProduct.display })
          }
          name="Display"
          color="primary"
        />

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
        <Switch
          checked={newProduct.camera}
          onChange={() =>
            setNewProduct({ ...newProduct, camera: !newProduct.camera })
          }
          name="camera"
          color="primary"
        />

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
        <Switch
          checked={newProduct.gpu}
          onChange={() =>
            setNewProduct({ ...newProduct, gpu: !newProduct.gpu })
          }
          name="gpu"
          color="primary"
        />

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
        <Switch
          checked={newProduct.ram}
          onChange={() =>
            setNewProduct({ ...newProduct, ram: !newProduct.ram })
          }
          name="ram"
          color="primary"
        />

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
        <Switch
          checked={newProduct.storage}
          onChange={() =>
            setNewProduct({ ...newProduct, storage: !newProduct.storage })
          }
          name="storage"
          color="primary"
        />

        <h3>FingerPrint Sensor</h3>
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
        <h3>Backlit Keyboard</h3>
        <Switch
          checked={newProduct.backlit}
          onChange={() =>
            setNewProduct({ ...newProduct, backlit: !newProduct.backlit })
          }
          name="backlit"
          color="primary"
        />
        <h3>Touch Screen</h3>
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
        <h3>Magsafe</h3>
        <Switch
          checked={newProduct.magsafe}
          onChange={() =>
            setNewProduct({ ...newProduct, magsafe: !newProduct.magsafe })
          }
          name="magsafe"
          color="primary"
        />
      </form>
    </>
  );
}

export default AdminAddProductPage;
