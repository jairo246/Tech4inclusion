import { createTheme } from "@material-ui/core/styles";
import { red } from "@mui/material/colors";
import { grey } from "@mui/material/colors";

const defaultTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: grey[900],
    },
    secondary: {
        main: red[600],
    },
    background: {
      default: "#000",
    }
    
  },
  
  
});

export default defaultTheme;
