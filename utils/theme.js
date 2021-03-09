import "fontsource-roboto";
import { createMuiTheme } from '@material-ui/core/styles';
import { lightBlue, deepOrange } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: lightBlue,
    secondary: deepOrange
  },
});

export default theme;
