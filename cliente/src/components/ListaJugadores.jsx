import React, { useState } from "react";
import axios from "axios";
import '../css/ListaJugadores.css'
// Elementos para listar insumos en la tabla
import { Table, TableContainer, TableHead, TableCell, TableBody, TableRow} from '@mui/material';


function ListaJugadores(props) {
  const { lista, listUpdater } = props;

  function eliminar(jugador) {
    axios
      .delete(`http://localhost:8000/api/user/${jugador._id}`)
      .then(
        axios
          .get("http://localhost:8000/api/user")
          .then((response) => listUpdater(response.data))
      )
      .catch(console.log);
    window.location.href = "/players/list";
  }

  console.log("lista", lista);

  return lista.length === 0 ? (
    <p>Sin jugadores</p>
  ) : (
    <div className='Supp-Table'>
      <TableContainer>
        <Table>
          <TableHead className="table-head">
            <TableRow >
              <TableCell sx={{ fontWeight: 'bold' }} >Team Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Preferred Position</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              lista.map((element, index) => (
                <TableRow key={index}>
                  <TableCell >{element["Team Name"]}</TableCell>
                  <TableCell >{element["Preferred Position"]}</TableCell>
                  <TableCell>
                    <button onClick={() => {
                        return eliminar(element);
                      }} className='delete-btn'>
                      Delete
                    </button>
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

export default ListaJugadores;
