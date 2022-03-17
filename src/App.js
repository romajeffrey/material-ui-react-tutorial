import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";

import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Label } from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";
import {
  makeStyles,
  // ThemeProvider,
  // createTheme,
} from "@material-ui/core/styles";

import "fontsource-roboto";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/core/MenuIcon";
import MenuIcon from "@material-ui/icons/Menu";
// import { createTheme } from "@material-ui/core/styles";
// import { ThemeProvider, createTheme } from "@material-ui/core/styles";
// import { createMuiTheme, ThemeProvider } from "@material-ui/core";
// import { createTheme } from "@mui/material/styles";

// import { orange } from "@material-ui/core/colors";

import { blue, red } from "@material-ui/core/colors";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B, #FF8E53)",
    // background: "linear-gradient(45deg, #333, #000)",
    // background: "linear-gradient(45deg, #333, #999)",
    marginBottom: 15,
    border: 0,
    borderRadius: 15,
    color: "white",
    padding: "5px 30px",
    // padding: "0 30px",
  },
});

const theme = createTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 15,
    },
  },
  palette: {
    primary: {
      main: red[400],
    },
    secondary: {
      main: blue[400],
    },
  },
});

// const theme = createTheme({
//   palette: {
//     primary: orange[500],
//   },
// });

function ButtonStyled() {
  const classes = useStyles();
  return <button className={classes.root}>test styled button</button>;
}

function CheckboxExample() {
  const [checked, setchecked] = React.useState(true);
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            checkedIcon={<SaveIcon />}
            icon={<DeleteIcon />}
            onChange={(e) => {
              setchecked(e.target.checked);
            }}
            color="primary"
            inputProps={{
              "aria-label": "secondary checkbox",
            }}
            // disabled
          />
        }
        label="testing"
      />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* md lg xs(igual mobile) */}
      <Container maxWidth="md">
        <div className="App">
          <header className="App-header">
            <AppBar color="secondary">
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">Mui theme</Typography>
                <Button>Login</Button>
              </Toolbar>
            </AppBar>
            <Typography variant="h2">Welcome to MUI</Typography>
            <Typography variant="h2" component="div">
              Welcome to MUI
            </Typography>
            <Typography variant="h3">Learn how to use Material UI</Typography>
            <Typography variant="subtitle1">
              Learn how to use Material U I
            </Typography>
            <Typography variant="body1">
              Learn how to use Material UI
            </Typography>
            <ButtonStyled />

            <Grid container spacing={2} justify="center">
              <Grid item xs={3} sm={6}>
                <Paper
                  style={{
                    height: 75,
                    width: "100%",
                    // width: 50,
                  }}
                />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper
                  style={{
                    height: 75,
                    width: "100%",
                  }}
                />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper
                  style={{
                    height: 75,
                    width: "100%",
                  }}
                />
              </Grid>
            </Grid>
            <TextField
              label="Label"
              // value="jeffrey@gmail.com"
              placeholder="jeffrey@gmail.com"
              // variant="filled"
              variant="outlined"
              color="secondary"
              // type="date"
              // type="password"
              type="email"
            />
            <CheckboxExample />
            <ButtonGroup variant="contained" color="secondary">
              <Button
                startIcon={<SaveIcon />}
                size="large"
                // disabled
                // onClick={() => }
                // style={{
                //   fontSize: 24,
                // }}
                // variant="contained"
                // color="primary"
              >
                Save
              </Button>
              <Button
                endIcon={<DeleteIcon />}
                size="large"
                // disabled
                // onClick={() => }
                // style={{
                //   fontSize: 24,
                // }}
                // variant="contained"
                // color="secondary"
              >
                Discard
              </Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
