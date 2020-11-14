import "./App.css";
import { Main } from "./components/main/main";
import { Header } from "./components/header/header";
import { StickyNotes } from "./components/stickyNotes/stickyNotes";

function App() {
  return (
    <>
      <Header/>
      <Main />
      <StickyNotes/>
    </>
  );
}

export default App;
