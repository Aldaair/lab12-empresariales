import React, { useState, useEffect } from "react";
import {
  getPrestamos,
  deletePrestamos,
} from "../services/PrestamosService";
import { EditView } from "./EditView";
import NewPrestamo from "./NewPrestamo";
import { useNavigate } from "react-router-dom";
function Prestamos() {

  const navigate = useNavigate();

  const [prestamos, setPrestamos] = useState([]);

  const [editPrestamoView, setEditPrestamoView] = useState(false);
  const [newPrestamoView, setNewPrestamoView] = useState(false);
  const [idParaEditar, setIdParaEditar] = useState(null);

  const [pruebita, setPruebita] = useState(false);

  const handleClickEdit = (id_prestamo) => {
    setIdParaEditar(id_prestamo);
    setEditPrestamoView(true);
  };
  const handleClicklDelete = (id_prestamo) => {
    deletePrestamos(id_prestamo).then(() => {
      setPruebita(true);
    });
  };
  useEffect(() => {
    getPrestamos().then((response) => {
      setPrestamos(response.prestamos);
    });
  }, [pruebita]);

  const handleNewPrestamo = () => {
    navigate("/nuevo-prestamo");
    setNewPrestamoView(true);
  };
  return (
    <div>
      <button onClick={handleNewPrestamo}>Nuevo Prestamo</button>
      <table className="table">
        <thead>
          <tr>
            <th>ID_PRESTAMO</th>
            <th>ID_LIBRO</th>
            <th>ID_USUARIO</th>
            <th>FECHA DE PRESTAMO</th>
            <th>FECHA DE DEVOLUCIÓN</th>
            <th>Herramientas</th>
          </tr>
        </thead>
        <tbody>
          {prestamos.map((prestamo) => {
            return (
              <>
                <tr>
                  <td>{prestamo.id_prestamo}</td>
                  <td>{prestamo.id_libro_id}</td>
                  <td>{prestamo.id_usuario_id}</td>
                  <td>{prestamo.fecha_prestamo}</td>
                  <td>{prestamo.fecha_devolucion}</td>
                  <td>
                    <button
                      onClick={() => handleClickEdit(prestamo.id_prestamo)}
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleClicklDelete(prestamo.id_prestamo)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      {newPrestamoView ? <NewPrestamo /> : null}
      {editPrestamoView ? <EditView id_prestamo={idParaEditar} /> : null}
    </div>
  );
}

export default Prestamos;
