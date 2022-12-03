export const getPrestamos = () => {
  return fetch("http://localhost:8000/api/prestamos")
    .then((response) => response.json())
};

export const postPrestamos = (prestamo) => {
  return fetch("http://localhost:8000/api/prestamos/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id_libro_id: parseInt(prestamo.id_libro_id),
      id_usuario_id: parseInt(prestamo.id_usuario_id),
      fecha_prestamo: prestamo.fecha_prestamo,
      fecha_devolucion: prestamo.fecha_devolucion,
    }),
  });
};

export const updatePrestamos = (prestamo) => {
  return fetch(`http://localhost:8000/api/prestamos/${prestamo.id_prestamo}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id_libro_id: parseInt(prestamo.id_libro_id),
      id_usuario_id: parseInt(prestamo.id_usuario_id),
      fecha_prestamo: prestamo.fecha_prestamo,
      fecha_devolucion: prestamo.fecha_devolucion,
    }),
  });
};

export const deletePrestamos = (id) => {
  return fetch(`http://localhost:8000/api/prestamos/${id}`, {
    method: "DELETE",
  });
}