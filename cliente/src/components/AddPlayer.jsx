import React, { useState } from "react";
import axios from "axios";

function AddPlayer(props) {
  const { lista } = props;
  const [info, setInfo] = useState({
    "Team Name": "",
    "Preferred Position": "",
  });

  const [nombreIncorrecto, setNombreIncorrecto] = useState(false);
  const [posicionIncorrecta, setPosicionIncorrecta] = useState(false);

  function agregarJugador() {
    setNombreIncorrecto(info["Team Name"].length < 2);
    setPosicionIncorrecta(info["Preferred Position"] < 2);
    if (info["Team Name"].length < 2 || info["Preferred Position"] < 2) return;
    // lista.push(info);
    axios
      .post("http://localhost:8000/api/user/new", {
        nombre: info["Team Name"],
        posicion: info["Preferred Position"],
      })
      .then(console.log)
      .catch(console.log);
    // navegar("/players/list");
    window.location.href = "/players/list";
  }

  return (
    <div>
      <h2>Add Player</h2>
      <label>Player Name:</label>
      <input
        type="text"
        placeholder="Ingrese el nombre de su jugador o alguna verga así"
        onChange={(elemento) => {
          setInfo({ ...info, "Team Name": elemento.target.value });
        }}
      />
      {nombreIncorrecto && (
        <p style={{ color: "red" }}>*El nombre ingresado es incorrecto!</p>
      )}
      <br />
      <label>Preferred Position:</label>
      <input
        type="text"
        placeholder="Ingrese su posición preferida y ya (pero no sexual)"
        onChange={(elemento) => {
          setInfo({ ...info, "Preferred Position": elemento.target.value });
        }}
      />
      {posicionIncorrecta && (
        <p style={{ color: "red" }}>*La posición es incorrecta!</p>
      )}
      <br />
      <button
        onClick={() => {
          return agregarJugador();
        }}
      >
        ADD
      </button>
    </div>
  );
}

export default AddPlayer;
