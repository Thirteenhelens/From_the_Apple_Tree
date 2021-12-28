import { useDispatch } from "react-redux";
// MUI IMPORTS
import { IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function AdminDeleteBttn({ product }) {
  const dispatch = useDispatch();
  return (
    <IconButton
      onClick={() => dispatch({ type: "DELETE_PRODUCT", payload: product.id })}
    >
      <DeleteForeverIcon />
    </IconButton>
  );
}

export default AdminDeleteBttn;
