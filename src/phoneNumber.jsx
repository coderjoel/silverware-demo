import { forwardRef } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const phoneInput = (props, ref) => {
  const textColor = "white";

  return (
    <TextField
      {...props}
      inputRef={ref}
      name="phone"
      id="phoneNumber"
      label="Phone Number"
      variant="outlined"
      style={{ width: "95%" }}
      inputProps={{
        style: { color: textColor },
      }}
      InputLabelProps={{
        style: { color: textColor },
      }}
    />
  );
};
export default forwardRef(phoneInput);
