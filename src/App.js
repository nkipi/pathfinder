import "./App.css";
import { Main } from "./components/main/main";
import { Header } from "./components/header/header";
import { HarrowDeck } from "./components/harrowDeck/harrowDeck";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/"><Main /></Route>
        <Route exact path="/pathfinder"><Main /></Route>
        <Route exact path="/deck"><HarrowDeck /></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
