import { Theme } from "@mui/material/styles";
const palette = {
    mode: 'light',
    primary: {
        main: "#1423E2"
    },
    success: {
        main: "#00DC00"
    },
    warning: {
        main: "#FFAD05"
    },
    error: {
        main: "#FF0000"
    },
    background: {
        default: "#F5F5F5",
    },
    neutral: {
        900: "#00141D",
        800: "#63727E",
        700: "#77838D",
        600: "#97A0A9",
        500: "#B9C0C4",
        400: "#E1E1E1",
        300: "#EDEEF0",
        200: "#F5F5F5",
        100: "#FFFFFF"
    },
    indigo: {
        900: "#001866",
        800: "#263698",
        700: "#4D54CC",
        600: "#6C6CF4",
        500: "#A4A4F7",
        400: "#CFCFF9",
        300: "#E2E2FB",
        200: "#EEEEFD"
    },
    teal: {
        900: "#003F3C",
        800: "#005E5C",
        700: "#00807F",
        600: "#009F9F",
        500: "#5BC3C3",
        400: "#A5E0E0"
    },
    violet: {
        900: "#260F60",
        800: "#4B2792",
        700: "#5E33AC",
        600: "#874DE2",
        500: "#B38DEE",
        400: "#DAB2FF",
        300: "#E9D1FF"
    },
    green: {
        900: "#0A4C1A",
        800: "#0E6A22",
        700: "#5E33AC",
        600: "#874DE2",
        500: "#B38DEE",
        400: "#DAB2FF",
        300: "#E9D1FF"
    },
    orange: {
        900: "#8B2E00",
        800: "#A44300",
        700: "#DF762C",
        600: "#FF8E40",
        500: "#FFCB8C",
        400: "#FCDDBE"
    },
    magenta: {
        900: "#741037",
        800: "#960C4C",
        700: "#B90264",
        600: "#F44495",
        500: "#FF9BD2",
        400: "#FFD6EC"
    }
}

const tableOverride = {
    root: {
        fontFamily: "satoshi, roboto, sans-serif",
        fontSize: "14px",
        lineHeight: "auto",
        letterSpacing: "0.25%",
        fontWeight: 400
    }
}

const overrides = (theme: Theme) => ({
    fontFamily: "satoshi, sans-serif",
    h1: {
        fontSize: "34px",
        lineHeight: "40px",
        letterSpacing: "0.25px",
        fontWeight: 400
    },
    h2: {
        fontSize: 24,
        lineHeight: "auto",
        letterSpacing: "0.15px",
        fontWeight: 400
    },
    h3: {
        fontSize: "20px",
        lineHeight: "auto",
        letterSpacing: "0.15px",
        fontWeight: 400
    },
    body: {
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0.5px",
        fontWeight: 400,
        [`${theme.breakpoints.down("lg")}`]: {
            fontSize: "18px",
            lineHeight: "auto",
            letterSpacing: "0.15px",
            fontWeight: 700
        },
        [`${theme.breakpoints.down("sm")}`]: {
            fontSize: "14px",
            lineHeight: "20px",
            letterSpacing: "0.25px",
        },
        [`${theme.breakpoints.down("xs")}`]: {
            fontSize: "12px",
            lineHeight: "16px",
            letterSpacing: "0",
            fontWeight: 400
        }
    },
    label: {
        fontFamily: "satoshi, sans-serif",
    },
    overline: {
        fontSize: "10px",
        lineHeight: "auto",
        letterSpacing: "8%",
        fontWeight: 700
    },
    ban: {
        fontSize: "60px",
        lineHeight: "auto",
        letterSpacing: "0",
        fontWeight: 500,
        [`${theme.breakpoints.down("sm")}`]: {
            fontSize: "36px",
            lineHeight: "auto",
            letterSpacing: "3%",
        }
    }
});

export {palette, overrides, tableOverride};
