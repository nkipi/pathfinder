import { Main } from "./components/main/main";
import { HarrowDeck } from "./components/harrowDeck/harrowDeck";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import zotha from "./characters/zotha.json";
import twinkle from "./characters/twinkle.json";
import zothaPortrait from "./images/zotha_dark.jpg";
import twinklePortrait from "./images/twinkle.jpg";
import { CharacterSelection } from "./components/characterSelection/characterSelection";

const zothaTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#b377eb",
      main: "#8a2be2",
      dark: "#601e9e",
      contrastText: "#fff",
    },
    secondary: {
      light: "#7bdf7b",
      main: "#32cd32",
      dark: "#238f23",
      contrastText: "#000",
    },
    tertiary: {
      light: "#ffb394",
      main: "#ffa500",
      dark: "#d32f2f",
      contrastText: "#000",
    },
  },
});

const twinkleTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#f08080",
      main: "#DC143C",
      dark: "#800000",
      contrastText: "#fff",
    },
    secondary: {
      light: "#C0C0C0",
      main: "#242424",
      dark: "#080800",
      contrastText: "#000",
    },
    tertiary: {
      light: "#ffb394",
      main: "#ffa500",
      dark: "#d32f2f",
      contrastText: "#000",
    },
  },
});

function App() {
  return (
    <BrowserRouter basename="/pathfinder">
      <Switch>
        <Route exact path="/"><CharacterSelection /></Route>
        <Route exact path="/zotha">
          <Main
            character={zotha}
            portrait={zothaPortrait}
            theme={zothaTheme}
            className={"theme-zotha"}
          />
        </Route>
        <Route exact path="/twinkle">
          <Main
            character={twinkle}
            portrait={twinklePortrait}
            theme={twinkleTheme}
            className={"theme-twinkle"}
          />
        </Route>
        <Route exact path="/deck">
          <HarrowDeck />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
