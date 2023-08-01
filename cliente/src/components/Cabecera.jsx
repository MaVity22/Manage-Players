import React from "react";
import { Link, Outlet } from "react-router-dom";
import '../css/Cabecera.css'

function Cabecera() {
  return (
    <div className="cabecera-principal">
      <h2 id="princ-options">
      <Link to="/players/list"> Manage Players</Link> |&nbsp;
      <Link to="/status/game/1"> Manage Player Status</Link>
      </h2>
      <Outlet />
    </div>
  );
}

export default Cabecera;
