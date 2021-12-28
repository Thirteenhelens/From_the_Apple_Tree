// MUI IMPORTS
import { Button } from "@mui/material";

import { useHistory } from "react-router";
import { useSelector } from "react-redux";

function CompareDevicesButton() {
  const history = useHistory();
  const compare = useSelector((store) => store.compare);

  return (
    <div>
      {compare.length === 2 ? (
        <Button variant="outlined" onClick={() => history.push("/compare")}>
          Compare Devices
        </Button>
      ) : (
        <Button disabled variant="outlined">
          Compare Devices
        </Button>
      )}
    </div>
  );
}

export default CompareDevicesButton;
