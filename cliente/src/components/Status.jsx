import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

// Titulos dinámicos
const gameTitles = {
  '/status/game/1': 'Player Status - Game 1',
  '/status/game/2': 'Player Status - Game 2',
  '/status/game/3': 'Player Status - Game 3',
};

function Status() {
  // Se obtiene la ruta de la página actual
  const location = useLocation();
  // Se obtiene el título en función de la ruta donde se esté
  const currentTitle = gameTitles[location.pathname];
  return (
    <div className="cabecer-status">
      <h2>{currentTitle}</h2>
      <Link to="/status/game/1">Game 1</Link> |&nbsp;
      <Link to="/status/game/2">Game 2</Link> |&nbsp;
      <Link to="/status/game/3">Game 3</Link>
      <Outlet />
    </div>
  );
}

export default Status;
