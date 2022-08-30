import { DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import Dropzone from "./DropZone";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  styled,
} from "@mui/material";
import { Span } from "app/components/Typography";
import { useEffect, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));

const SimpleForm = () => {
  const [state, setState] = useState({ date: new Date() });

  useEffect(() => {
    ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
      if (value !== state.password) return false;

      return true;
    });
    return () => ValidatorForm.removeValidationRule("isPasswordMatch");
  }, [state.password]);

  const handleSubmit = (event) => {
    // console.log("submitted");
    // console.log(event);
  };

  const handleChange = (event) => {
    event.persist();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleDateChange = (date) => setState({ ...state, date });

  const {
    productName,
    description,
    date,
    productId,
  } = state;

  return (
    <div>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <Grid container spacing={6}>
          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
            <TextField
              type="text"
              name="productName"
              id="standard-basic"
              value={productName || ""}
              onChange={handleChange}
              errorMessages={["this field is required"]}
              label="Name of Product"
              validators={["required", "minStringLength: 4", "maxStringLength: 9"]}
            />

            <TextField
              type="text"
              name="description"
              label="Product Description"
              onChange={handleChange}
              value={description || ""}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />

            <TextField
              type="number"
              name="productId"
              label="Product ID"
              value={productId || ""}
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["this field is required"]}
            />

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={date}
                onChange={handleDateChange}
                renderInput={(props) => (
                  <TextField
                    {...props}
                    label="Date picker"
                    id="mui-pickers-date"
                    sx={{ mb: 2, width: "100%" }}
                  />
                )}
              />
            </LocalizationProvider>
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>

            <Dropzone/>

            <FormControlLabel
              control={<Checkbox />}
              label="I have read and agree to the terms of service."
            />
          </Grid>
        </Grid>

        <Button color="primary" variant="contained" type="submit">
          <Span sx={{ pl: 1, textTransform: "capitalize" }}>Add Product</Span>
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default SimpleForm;
