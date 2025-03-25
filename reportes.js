
import { obtenerEstudiantes } from './estudiantes.js';

export const generarListadoEstudiantes = () => {
  return obtenerEstudiantes().map(est => ({ nombre: est.nombre, área: est.nivel }));
};

export const buscarEstudiante = (criterio) => {
  return obtenerEstudiantes().find(est => est.nombre === criterio || est.id === criterio);
};

export const calcularPromediosEstudiantes = () => {
  return obtenerEstudiantes().map(est => {
    const promedio = (Object.values(est.calificaciones).reduce((a, b) => a + b, 0)) / Object.keys(est.calificaciones).length;
    return { nombre: est.nombre, promedio, área: est.nivel };
  });
};

export const filtrarEstudiantesPorPromedio = (umbral) => {
  return calcularPromediosEstudiantes().filter(est => est.promedio > umbral);
};

export const obtenerEstudiantesAprobadosReprobados = (materia) => {
  const aprobados = obtenerEstudiantes().filter(est => est.calificaciones[materia] >= 60).map(est => ({ nombre: est.nombre, calificación: est.calificaciones[materia], área: est.nivel }));
  const reprobados = obtenerEstudiantes().filter(est => est.calificaciones[materia] < 60).map(est => ({ nombre: est.nombre, calificación: est.calificaciones[materia], área: est.nivel }));
  return { aprobados, reprobados };
};

export const calcularPromedioGeneralGrupo = () => {
  const totalCalificaciones = obtenerEstudiantes().reduce((acc, est) => acc + Object.values(est.calificaciones).reduce((a, b) => a + b, 0), 0);
  const totalEstudiantes = obtenerEstudiantes().length;
  return { promedioGeneral: totalCalificaciones / (totalEstudiantes * Object.keys(obtenerEstudiantes()[0].calificaciones).length) };
};

export const calcularPromedioPorArea = () => {
  return obtenerEstudiantes().reduce((acc, est) => {
    if (!acc[est.nivel]) acc[est.nivel] = [];
    const promedio = (Object.values(est.calificaciones).reduce((a, b) => a + b, 0)) / Object.keys(est.calificaciones).length;
    acc[est.nivel].push(promedio);
    return acc;
  }, {});
};

export const rankingEstudiantes = () => {
  return calcularPromediosEstudiantes().sort((a, b) => b.promedio - a.promedio);
};
