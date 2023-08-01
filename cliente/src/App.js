import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cabecera from "./components/Cabecera";
import PlayerList from "./components/PlayerList";
import Status from "./components/Status";
import ListaJugadores from "./components/ListaJugadores";
import AddPlayer from "./components/AddPlayer";
import Game1 from "./components/Game1";
import Game2 from "./components/Game2";
import Game3 from "./components/Game3";
import axios from "axios";
import { useEffect, useState } from "react";

// const playerList = [
//   { "Team Name": "Neimar", "Preferred Position": "Forward" },
//   { "Team Name": "Messi", "Preferred Position": "Midfielder" },
//   { "Team Name": "Zlatan", "Preferred Position": "Forward" },
// ];

function App() {
  const [playerList, setPlayerList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/user")
      .then((response) => setPlayerList(response.data))
      .catch(console.log);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cabecera />}>
            <Route path="players" element={<PlayerList />}>
              <Route
                path="list"
                element={
                  <ListaJugadores
                    lista={playerList}
                    listUpdater={(nuevaLista) => setPlayerList(nuevaLista)}
                  />
                }
              />
              <Route
                path="addplayer"
                element={<AddPlayer lista={playerList} />}
              />
            </Route>
            <Route path="status" element={<Status />}>
              <Route path="game/1" element={<Game1 lista={playerList} listUpdater={setPlayerList}/>} />
              <Route path="game/2" element={<Game2 lista={playerList} listUpdater={setPlayerList}/>} />
              <Route path="game/3" element={<Game3 lista={playerList} listUpdater={setPlayerList}/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
