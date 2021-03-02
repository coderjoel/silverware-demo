import "./App.css";
import React, { useState, forwardRef } from "react";
import { Container, Button, TextField, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import PhoneInput from "react-phone-number-input";
import CustomPhoneNumber from "./phoneNumber";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#C82027",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#C82027",
      },
    },
  },
  fieldset: {
    borderColor: "#C82027",
    borderWidth: 4,
    borderRadius: 10,
    width: "60vw",
    marginTop: "3%",
  },
  legend_text: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
  select: {
    "&:before": {
      borderColor: "white",
    },
    "&:after": {
      borderColor: "white",
    },
  },
  icon: {
    fill: "white",
  },
  whiteColor: {
    color: "white",
  },
}));

function App() {
  const classes = useStyles();
  const textColor = "white";
  const marginValue = 10;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [addLineOne, setAddLineOne] = useState("");
  const [addLineTwo, setAddLineTwo] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("Canada");
  const [appDate, setAppDate] = useState("");

  function showValues() {
    if (
      firstName &&
      lastName &&
      phoneNumber &&
      email &&
      phoneNumber &&
      addLineOne &&
      city &&
      postalCode &&
      province &&
      appDate
    ) {
      alert(
        `Values are: \nFirst Name: ${firstName}\nLast Name: ${lastName}\nPhone Number: ${phoneNumber}\nEmail: ${email}\nAddress line One: ${addLineOne}\nAddress line Two: ${addLineTwo}\nCity: ${city}\nPostal Code: ${postalCode}\nProvince: ${province}\nCountry: ${country}\nAppointment Date: ${appDate}`
      );
    } else {
      alert("Please fill in all the details");
    }
  }

  function reset() {
    setAddLineOne("");
    setAppDate("");
    setCity("");
    setCountry("");
    setEmail("");
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setPostalCode("");
    setProvince("");
    setAddLineTwo("");
    alert(`Field values have been reset`);
  }

  return (
    <Container
      className="App"
      style={{
        height: "100%",
        minHeight: "100vh",
        width: "100vw",
        paddingBottom: 120,
        backgroundColor: "#474749",
      }}
      maxWidth={false}
    >
      <div style={{ padding: 24 }}>
        <img
          src="https://mypass.silverwarepos.com/Images/silverware_logo2.png"
          alt="Logo"
          width="280"
          height="60"
        />
      </div>
      <Grid container direction="column" justify="center" alignItems="center">
        <form className={classes.root}>
          <fieldset className={classes.fieldset}>
            <legend className={classes.legend_text}>Profile Information</legend>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="center"
              spacing={24}
            >
              <Grid item xs={12} sm={6} style={{ marginTop: marginValue }}>
                <TextField
                  id="firstName"
                  required
                  label="First Name"
                  variant="outlined"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  style={{ width: "95%" }}
                  inputProps={{
                    style: { color: textColor },
                  }}
                  InputLabelProps={{
                    style: { color: textColor },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} style={{ marginTop: marginValue }}>
                <TextField
                  id="lastName"
                  required
                  label="Last Name"
                  value={lastName}
                  variant="outlined"
                  onChange={(e) => setLastName(e.target.value)}
                  style={{ width: "95%" }}
                  inputProps={{
                    style: { color: textColor },
                  }}
                  InputLabelProps={{
                    style: { color: textColor },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={7} style={{ marginTop: marginValue }}>
                <PhoneInput
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  required
                  defaultCountry="CA"
                  countrySelectProps={{ unicodeFlags: true }}
                  onChange={(e) => setPhoneNumber(e)}
                  inputComponent={CustomPhoneNumber}
                />
              </Grid>
              <Grid item xs={12} style={{ marginTop: marginValue }}>
                <TextField
                  id="emailId"
                  label="Email"
                  required
                  value={email}
                  variant="outlined"
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ width: "95%" }}
                  inputProps={{
                    style: { color: textColor },
                  }}
                  InputLabelProps={{
                    style: { color: textColor },
                  }}
                />
              </Grid>
            </Grid>
          </fieldset>
          <fieldset className={classes.fieldset}>
            <legend className={classes.legend_text}>Contact Information</legend>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="center"
              spacing={24}
            >
              <Grid item xs={12} style={{ marginTop: marginValue }}>
                <TextField
                  id="addressLineOne"
                  required
                  label="Address Line One"
                  variant="outlined"
                  value={addLineOne}
                  onChange={(e) => setAddLineOne(e.target.value)}
                  style={{ width: "97%" }}
                  inputProps={{
                    style: { color: textColor },
                  }}
                  InputLabelProps={{
                    style: { color: textColor },
                  }}
                />
              </Grid>
              <Grid item xs={12} style={{ marginTop: marginValue }}>
                <TextField
                  id="addressLineTwo"
                  label="Address Line Two"
                  variant="outlined"
                  value={addLineTwo}
                  onChange={(e) => setAddLineTwo(e.target.value)}
                  style={{ width: "97%" }}
                  inputProps={{
                    style: { color: textColor },
                  }}
                  InputLabelProps={{
                    style: { color: textColor },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} style={{ marginTop: marginValue }}>
                <TextField
                  id="city"
                  label="City"
                  variant="outlined"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  style={{ width: "95%" }}
                  inputProps={{
                    style: { color: textColor },
                  }}
                  InputLabelProps={{
                    style: { color: textColor },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} style={{ marginTop: marginValue }}>
                <TextField
                  id="postalCode"
                  label="Postal Code"
                  required
                  variant="outlined"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  style={{ width: "95%" }}
                  inputProps={{
                    style: { color: textColor },
                  }}
                  InputLabelProps={{
                    style: { color: textColor },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} style={{ marginTop: marginValue }}>
                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  style={{ width: "95%" }}
                >
                  <InputLabel
                    id="demo-simple-select-outlined-label"
                    style={{ color: "white" }}
                  >
                    Province
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={province}
                    required
                    onChange={(e) => setProvince(e.target.value)}
                    label="Province"
                    className={classes.select}
                    inputProps={{
                      classes: {
                        root: classes.whiteColor,
                        icon: classes.icon,
                      },
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="Alberta">Alberta</MenuItem>
                    <MenuItem value="British Columbia">
                      British Columbia
                    </MenuItem>
                    <MenuItem value="Manitoba">Manitoba</MenuItem>
                    <MenuItem value="New Brunswick">New Brunswick</MenuItem>
                    <MenuItem value="Newfoundland and Labrador">
                      Newfoundland and Labrador
                    </MenuItem>
                    <MenuItem value="Nova Scotia">Nova Scotia</MenuItem>
                    <MenuItem value="Ontario">Ontario</MenuItem>
                    <MenuItem value="Prince Edward Island">
                      Prince Edward Island
                    </MenuItem>
                    <MenuItem value="Quebec">Quebec</MenuItem>
                    <MenuItem value="Saskatchewan">Saskatchewan</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6} style={{ marginTop: marginValue }}>
                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  style={{ width: "95%" }}
                >
                  <InputLabel
                    id="demo-simple-select-outlined-label"
                    style={{ color: "white" }}
                  >
                    Country
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    label="Country"
                    className={classes.select}
                    inputProps={{
                      classes: {
                        root: classes.whiteColor,
                        icon: classes.icon,
                      },
                    }}
                  >
                    <MenuItem value="Canada">
                      <em>Canada</em>
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </fieldset>
          <fieldset className={classes.fieldset}>
            <legend className={classes.legend_text}>
              Appointment Information
            </legend>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="center"
              spacing={24}
            >
              <Grid item xs={12} style={{ marginTop: marginValue }}>
                <TextField
                  id="date"
                  label="Appointment Date"
                  type="date"
                  required
                  value={appDate}
                  onChange={(e) => setAppDate(e.target.value)}
                  style={{ width: "95%" }}
                  inputProps={{
                    style: { color: textColor },
                  }}
                  InputLabelProps={{
                    style: { color: textColor },
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          </fieldset>
          <Grid
            container
            direction="row"
            alignItems="center"
            style={{ width: "100%", marginTop: 30 }}
          >
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                type="submit"
                style={{
                  height: 60,
                  width: 200,
                  color: "white",
                  fontWeight: 600,
                  backgroundColor: "#C82027",
                }}
                onClick={() => showValues()}
              >
                Submit
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                style={{
                  height: 60,
                  width: 200,
                  color: "white",
                  fontWeight: 600,
                  backgroundColor: "black",
                }}
                onClick={() => reset()}
              >
                Reset
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Container>
  );
}

export default App;
