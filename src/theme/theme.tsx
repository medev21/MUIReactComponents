import { createTheme } from "@mui/material/styles";
import {palette, overrides, tableOverride} from "src/theme/mainTheme";

const theme = createTheme({
    palette: palette,
    typography: {
        fontFamily: "satoshi, sans-serif"
    },
    components: {
        MuiCssBaseline: {
        styleOverrides: overrides
    },
    MuiTable: {
        styleOverrides: tableOverride
    }
    }
});

export default theme;
