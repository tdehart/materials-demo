import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const MaterialList = ({ materials, selectedIndex, setSelected }) => {
  const handleListItemClick = (event, index) => {
    if (selectedIndex === index) {
      setSelected(-1);
    } else {
      setSelected(index);
    }
  };

  return (
    <List aria-label="materials" disablePadding dense>
      {materials.map((material, index) => (
        <ListItem
          key={material.id}
          disableGutters
          divider
          button
          selected={selectedIndex === index}
          onClick={(event) => handleListItemClick(event, index)}
        >
          <ListItemIcon style={{ marginLeft: 6 }}>
            <FiberManualRecordIcon
              htmlColor={material.color}
              fontSize="large"
            />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              noWrap: true,
            }}
            secondaryTypographyProps={{
              noWrap: true,
            }}
            primary={material.name}
            secondary={`${material.volume} m³`}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default MaterialList;
