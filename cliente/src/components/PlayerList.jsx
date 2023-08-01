import React from "react";
import { Link, Outlet } from "react-router-dom";

function PlayerList() {
  return (
    <div className="cabecera-list">
      <Link to="/players/list">List</Link> |&nbsp;
      <Link to="/players/addplayer">Add Player</Link>
      <Outlet />
    </div>
  );
}

export default PlayerList;
