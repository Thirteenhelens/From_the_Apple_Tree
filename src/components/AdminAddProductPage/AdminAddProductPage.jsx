import { FormControl } from "@mui/material";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import { useState } from "react";

function AdminAddProductPage() {
  //   const [Display, setDisplay] = useState(false);
  //   const [Display_txt, setDisplay_txt] = useState("");

  //   const [Camera, setCamera] = useState(false);
  //   const [Camera_txt, setCamera_txt] = useState("");

  //   const [GPU, setGPU] = useState(false);
  //   const [GPU_txt, setGPU_txt] = useState("");

  //   const [RAM, setRAM] = useState(false);
  //   const [RAM_txt, setRAM_txt] = useState("");

  //   const [Storage, setStorage] = useState(false);
  //   const [Storage_txt, setStorage_txt] = useState("");

  //   const [FingerPrint, setFingerPrint] = useState(false);

  //   const [Backlit, setBacklit] = useState(false);

  //   const [Touch_Screen, setTouch_Screen] = useState(false);

  //   const [Magsafe, setMagsafe] = useState(false);

  //   const [CPU, setCPU] = useState(false);
  //   const [CPU_txt, setCPU_txt] = useState("");

  //   const [HDMI, setHDMI] = useState(false);
  //   const [HDMI_txt, setHDMI_txt] = useState("");

  //   const [USBC, setUSBC] = useState(false);
  //   const [USBC_txt, setUSBC_txt] = useState("");

  const [product, setProduct] = useState({
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
      <FormControl>
        <h3>CPU</h3>
        <TextField id="standard-basic" label="CPU" variant="standard" />
        <Switch
          checked={product.cpu}
          value={product.cpu_txt}
          onChange={() => (
            setProduct(!product.cpu), setProduct(product.cpu_txt)
          )}
          name="loading"
          color="primary"
        />
      </FormControl>
      <FormControl>
        <h3>HDMI</h3>
        <TextField id="standard-basic" label="HDMI" variant="standard" />
        <Switch
          value={product.hdmi_txt}
          checked={product.hdmi}
          onChange={() => (
            setProduct(!product.hdmi), setProduct(product.hdmi_txt)
          )}
          name="loading"
          color="primary"
        />
      </FormControl>
      <FormControl>
        <h3>USBC</h3>
        <TextField id="standard-basic" label="USBC" variant="standard" />
        <Switch
          value={product.usbc_txt}
          checked={product.usbc}
          onChange={() => (setProduct(!usbc), setProduct(product.usbc_txt))}
          name="loading"
          color="primary"
        />
      </FormControl>
      <FormControl>
        <h3>Display</h3>
        <TextField id="standard-basic" label="Display" variant="standard" />
        <Switch
          value={product.display_txt}
          checked={product.display}
          onChange={() => (
            setProduct(!product.display), setProduct(product.usbc_txt)
          )}
          name="loading"
          color="primary"
        />
      </FormControl>
      <FormControl>
        <h3>Camera</h3>
        <TextField id="standard-basic" label="Camera" variant="standard" />
        <Switch
          value={product.camera_txt}
          checked={product.camera}
          onChange={() => (
            setProduct(!product.camera), setProduct(product.usbc_txt)
          )}
          name="loading"
          color="primary"
        />
      </FormControl>
      <FormControl>
        <h3>GPU</h3>
        <TextField id="standard-basic" label="GPU" variant="standard" />
        <Switch
          value={product.gpu_txt}
          checked={product.gpu}
          onChange={() => (
            setProduct(!product.gpu), setProduct(product.gpu_txt)
          )}
          name="loading"
          color="primary"
        />
      </FormControl>
      <FormControl>
        <h3>RAM</h3>
        <TextField id="standard-basic" label="RAM" variant="standard" />
        <Switch
          value={product.ram_txt}
          checked={product.ram}
          onChange={() => (
            setProduct(!product.ram), setProduct(product.ram_txt)
          )}
          name="loading"
          color="primary"
        />
      </FormControl>
      <FormControl>
        <h3>Storage</h3>
        <TextField id="standard-basic" label="Storage" variant="standard" />
        <Switch
          value={product.storage_TXT}
          checked={product.storage}
          onChange={() => (
            setProduct(!product.storage), setProduct(product.storage_TXT)
          )}
          name="loading"
          color="primary"
        />
      </FormControl>
      <h3>FingerPrint Sensor</h3>
      <Switch
        checked={product.fingerPrint}
        onChange={() => setProduct(!product.fingerPrint)}
        name="loading"
        color="primary"
      />
      <h3>Backlit Keyboard</h3>
      <Switch
        checked={product.backlit}
        onChange={() => setProduct(!product.backlit)}
        name="loading"
        color="primary"
      />
      <h3>Touch Screen</h3>
      <Switch
        checked={product.touchScreen}
        onChange={() => setProduct(!product.touchScreen)}
        name="loading"
        color="primary"
      />
      <h3>Magsafe</h3>
      <Switch
        checked={product.magsafe}
        onChange={() => setProduct(!product.magsafe)}
        name="loading"
        color="primary"
      />
    </>
  );
}

export default AdminAddProductPage;
