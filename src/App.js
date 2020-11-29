import { Main } from "./components/main/main";
import { Header } from "./components/header/header";
import { HarrowDeck } from "./components/harrowDeck/harrowDeck";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#b377eb',
      main: '#8a2be2',
      dark: '#601e9e',
      contrastText: '#fff',
    },
    secondary: {
      light: '#7bdf7b',
      main: '#32cd32',
      dark: '#238f23',
      contrastText: '#000',
    },
    tertiary: {
      light: '#ffb394',
      main: '#ffa500',
      dark: '#d32f2f',
      contrastText: '#000',
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/pathfinder">
        <Header />
        <Switch>
          <Route exact path="/"><Main /></Route>
          <Route exact path="/deck"><HarrowDeck /></Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
