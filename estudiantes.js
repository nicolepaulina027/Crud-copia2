

let estudiantes = [
    { id: 1, nombre: "Carlos Cruz", edad: 19, nivel: "Informática", calificaciones: { Matematicas: 90, Programacion: 95, Redes: 89 } },
    { id: 2, nombre: "Ana Gómez", edad: 20, nivel: "Gestión", calificaciones: { Matematicas: 85, Programacion: 88, Redes: 92 } },
    { id: 3, nombre: "Luis García", edad: 22, nivel: "Electrónica", calificaciones: { Matematicas: 60, Programacion: 55, Redes: 50 } }
  ];
  
  export const obtenerEstudiantes = () => estudiantes;
  
  export const buscarEstudiantePorId = (id) => estudiantes.find(est => est.id === id);
  
  export const actualizarEstudiante = (id, nuevoDatos) => {
    const estudiante = estudiantes.find(est => est.id === id);
    if (estudiante) {
      Object.assign(estudiante, nuevoDatos);
    }
  };
  
  export const agregarEstudiante = (estudiante) => {
    estudiantes.push(estudiante);
  };
  