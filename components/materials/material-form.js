import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { ColorPicker } from "material-ui-color";

const useStyles = makeStyles((theme) => ({
  number: {
    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
      marginLeft: theme.spacing(1),
    },
  },
}));

export default function MaterialForm({ selectedMaterial, handleSubmit }) {
  const classes = useStyles();
  const [formFields, setFormFields] = useState(selectedMaterial);

  // User selected a different material, update formFields
  useEffect(() => {
    setFormFields(selectedMaterial);
  }, [selectedMaterial.id, setFormFields]);

  // User changed a form field, submit change
  useEffect(() => {
    handleSubmit(formFields);
  }, [formFields]);

  const createChangeHandler = (key) => (evt) => {
    setFormFields((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const createDateChangeHandler = (key) => (date) => {
    setFormFields((prev) => ({ ...prev, [key]: date }));
  };

  const createColorChangeHandler = (key) => (color) => {
    setFormFields((prev) => ({ ...prev, [key]: `#${color.hex}` }));
  };

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="name"
            name="name"
            label="Name"
            value={formFields.name}
            onChange={createChangeHandler("name")}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel>Color</InputLabel>
          <ColorPicker
            defaultValue="red"
            hideTextfield
            value={formFields.color}
            onChange={createColorChangeHandler("color")}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            variant="outlined"
            label="Volume (m³)"
            type="number"
            className={classes.number}
            value={formFields.volume || 0}
            onChange={createChangeHandler("volume")}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 1000,
              min: 0,
              style: { textAlign: "right" },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            className={classes.number}
            value={formFields.cost}
            onChange={createChangeHandler("cost")}
            type="number"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            label="Cost (USD per m³)"
            fullWidth
            inputProps={{
              step: 0.1,
              min: 0,
              style: { textAlign: "right" },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              value={formFields.delivery_date}
              onChange={createDateChangeHandler("delivery_date")}
              required
              id="delivery_date"
              name="delivery_date"
              format="MM/dd/yyyy"
              inputVariant="outlined"
              autoOk
              label="Delivery Date"
              fullWidth
              KeyboardButtonProps={{
                "aria-label": "change delivery date",
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
