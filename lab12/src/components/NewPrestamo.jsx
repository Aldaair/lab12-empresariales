import React, { useState } from "react";
import { postPrestamos } from "../services/PrestamosService";
import { useNavigate } from "react-router-dom";

function NewPrestamo() {

  const navigate = useNavigate();

  let initialValues = {
    id_libro_id: "",
    id_usuario_id: "",
    fecha_prestamo: "",
    fecha_devolucion: "",
  };
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmitNewView = async (e) => {
    e.preventDefault();
    //Creando el prestamo
    try {
        let res = await postPrestamos(values);
        const data = await res.json();
  
      } catch (error) {
        console.log(error);
      }
    navigate("/");
  };
  return (
    <div>
      <h2>Nuevo Prestamo</h2>
      <form onSubmit={handleSubmitNewView}>
        <div className="mb-3">
          <label className="form-label">id_libro</label>
          <input
            type="text"
            className="form-control"
            name="id_libro_id"
            onChange={handleInputChange}
            value={values.id_libro_id}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">id_usuario</label>
          <input
            type="text"
            className="form-control"
            name="id_usuario_id"
            onChange={handleInputChange}
            value={values.id_usuario_id}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">fecha de prestamo</label>
          <input
            type="date"
            className="form-control"
            name="fecha_prestamo"
            onChange={handleInputChange}
            value={values.fecha_prestamo}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">fecha de devolución</label>
          <input
            type="date"
            className="form-control"
            name="fecha_devolucion"
            onChange={handleInputChange}
            value={values.fecha_devolucion}
          />
        </div>
        <button>Nuevo</button>
      </form>
    </div>
  );
}

export default NewPrestamo;
