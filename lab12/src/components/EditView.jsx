import { updatePrestamos, postPrestamos } from "../services/PrestamosService";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function EditView({ id_prestamo }) {
  const navigate = useNavigate();

  let initialValues = {
    id_prestamo: id_prestamo,
    id_libro_id: "",
    id_usuario_id: "",
    fecha_prestamo: "",
    fecha_devolucion: "",
  };
  const [values, setValues] = useState(initialValues);

  const handleSubmitEditView = (e) => {
    e.preventDefault();
    //Editando el prestamo
    updatePrestamos(values).then((response) => {
      console.log(response);
    });
    window.location.href = window.location.href;
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div>
      <h2>Edit Table</h2>
      <form onSubmit={handleSubmitEditView}>
        <div className="mb-3">
          <label for="" className="form-label">
            id_libro
          </label>
          <input
            type="text"
            className="form-control"
            name="id_libro_id"
            onChange={handleInputChange}
            value={values.id_libro_id}
          />
        </div>
        <div className="mb-3">
          <label for="" className="form-label">
            id_usuario
          </label>
          <input
            type="text"
            className="form-control"
            name="id_usuario_id"
            onChange={handleInputChange}
            value={values.id_usuario_id}
          />
        </div>
        <div className="mb-3">
          <label for="" className="form-label">
            fecha de prestamo
          </label>
          <input
            type="date"
            className="form-control"
            name="fecha_prestamo"
            onChange={handleInputChange}
            value={values.fecha_prestamo}
          />
        </div>
        <div className="mb-3">
          <label for="" className="form-label">
            fecha de devolución
          </label>
          <input
            type="date"
            className="form-control"
            name="fecha_devolucion"
            onChange={handleInputChange}
            value={values.fecha_devolucion}
          />
        </div>
        <button>Editar</button>
      </form>
    </div>
  );
}
