
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { GameList } from "./components/GameList.jsx";
// import { Game } from "./components/Game.jsx";
import { GameDetails } from "./components/GameDetails.jsx";

function App() {
  return (
    <Router>
    <Header name="amazing games" />
      <Routes>
        <Route exact path='/' element={<GameList />} />
        <Route path='/game/:id' element={<GameDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
