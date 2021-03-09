import React, { useState, useEffect } from "react";
import { v4 as generateRandomId } from "uuid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import MaterialList from "./material-list";
import MaterialForm from "./material-form";
import calculateTotalCost from "../../utils/calculateTotalCost";

const MAX_ITEMS_SHOWN = 5;
const HEIGHT = 61 * MAX_ITEMS_SHOWN;
const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(2),
    borderRadius: 50,
  },
  paper: {
    marginTop: theme.spacing(3),
    height: HEIGHT,
    overflow: "auto",
  },
  empty: {
    fontStyle: "italic",
    paddingTop: HEIGHT / 2,
  },
}));

const defaultState = {
  name: "New Material",
  color: "#fff",
  cost: "0",
  volume: "0",
  delivery_date: new Date(),
};

export default function Materials(props) {
  const classes = useStyles();
  const [materials, setMaterials] = useState(props.materials);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const selectedMaterial = materials[selectedIndex];
  const totalCost = calculateTotalCost(selectedMaterial);

  useEffect(() => {
    setMaterials(props.materials);
  }, [props.materials]);

  const onAddMaterial = () => {
    setMaterials([
      ...materials,
      {
        ...defaultState,
        id: generateRandomId(),
      },
    ]);
    setSelectedIndex(materials.length);
  };

  const onDeleteMaterial = () => {
    setMaterials([
      ...materials.slice(0, selectedIndex),
      ...materials.slice(selectedIndex + 1),
    ]);
    setSelectedIndex(-1);
  };

  const handleSubmit = (material) => {
    setMaterials([
      ...materials.slice(0, selectedIndex),
      material,
      ...materials.slice(selectedIndex + 1),
    ]);
  };

  return (
    <React.Fragment>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          {props.title}
        </Typography>
      </Box>
      <Box>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={onAddMaterial}
          startIcon={<AddIcon />}
        >
          Add
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          disabled={selectedIndex === -1}
          onClick={onDeleteMaterial}
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={4}>
          <Paper className={classes.paper}>
            {materials.length === 0 ? (
              <Typography
                className={classes.empty}
                variant="body2"
                color="textSecondary"
                align="center"
              >
                No Materials
              </Typography>
            ) : (
              <MaterialList
                materials={materials}
                selectedIndex={selectedIndex}
                setSelected={setSelectedIndex}
              />
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
          <Paper className={classes.paper}>
            <Box p={3}>
              {selectedMaterial && (
                <MaterialForm
                  selectedMaterial={selectedMaterial}
                  handleSubmit={handleSubmit}
                />
              )}
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Box display="flex" width="100%">
            <Box>Total Cost:</Box>
            <Box ml="auto" mr={1}>
              {`$${totalCost.toFixed(2)}`}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
