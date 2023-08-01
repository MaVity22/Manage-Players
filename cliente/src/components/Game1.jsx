import React from "react";
import axios from 'axios';
// Elementos para listar en tabla
import { Table, TableContainer, TableHead, TableCell, TableBody, TableRow } from '@mui/material';

function Game1(props) {
  const { lista, listUpdater } = props;

  function modificarJugador(jugador) {
    axios
      .put(`http://localhost:8000/api/user/${jugador._id}`, jugador)
      .then((response) => {
        console.log(response.data); // Si el servidor devuelve una respuesta, se muestra en la consola
      })
      .catch((error) => {
        console.error(error); // Si hay algún error en la solicitud, se muestra en la consola
      });
  }

  function cambiarEstado(element, op) {
    // Se crea una lista auxilair
    // Se imprime el elemento antes del cambio
    console.log(element);
    const buscado = element._id;
    const aux = lista.map((jugador) => {
      if (jugador._id === buscado) {
        if (op === 1) {
          if (jugador.juego1 === 'Playing') {
            return { ...jugador, "juego1": 'Undecided' };
          }
          else {
            return { ...jugador, "juego1": 'Playing' };
          }
        }
        else if (op === 2) {
          if (jugador.juego1 === 'Not playing') {
            return { ...jugador, "juego1": 'Undecided' };
          }
          else {
            return { ...jugador, "juego1": 'Not playing' };
          }
        }
        else if (op === 3) {
          return { ...jugador, "juego1": 'Undecided' };
        }
      }
      return jugador;
    });
    listUpdater(aux);

    // Aquí pasamos el objeto "jugador" modificado a la función "modificarJugador"
    const jugadorModificado = aux.find((jugador) => jugador._id === buscado);
    modificarJugador(jugadorModificado);
  }

  return (
    <div className='manage-Table'>
      <TableContainer>
        <Table>
          <TableHead >
            <TableRow >
              <TableCell sx={{ fontWeight: 'bold' }}>Team Name</TableCell>
              <TableCell></TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lista.map((element, index) => (
              <TableRow key={index}>
                <TableCell >{element["Team Name"]}</TableCell>
                <TableCell >
                  <button
                    onClick={() => {
                      cambiarEstado(element, 1);
                    }} style={{
                      backgroundColor: element.juego1 === 'Playing' ? 'green' : 'rgb(239,239,239)', // Cambia los colores aquí
                      color: element.juego1 === 'Playing' ? 'white' : 'black', // Cambia los colores aquí
                    }}>Playing</button>
                </TableCell>
                <TableCell>
                  <button onClick={() => {
                    cambiarEstado(element, 2);
                  }} style={{
                    backgroundColor: element.juego1 === 'Not playing' ? 'red' : 'rgb(239,239,239)', // Cambia los colores aquí
                    color: element.juego1 === 'Not playing' ? 'white' : 'black', // Cambia los colores aquí
                  }} >Not Playing</button>
                </TableCell>
                <TableCell>
                  <button onClick={() => {
                    cambiarEstado(element, 3);
                  }} style={{
                    backgroundColor: element.juego1 === 'Undecided' ? 'yellow' : 'rgb(239,239,239)'// Cambia los colores aquí
                  }} >Undecided</button>
                </TableCell>
              </TableRow>
            ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Game1;
