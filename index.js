
import { generarListadoEstudiantes, buscarEstudiante, calcularPromediosEstudiantes, filtrarEstudiantesPorPromedio, obtenerEstudiantesAprobadosReprobados, calcularPromedioGeneralGrupo, calcularPromedioPorArea, rankingEstudiantes } from './modules/reportes.js';
import { agregarEstudiante, actualizarEstudiante } from './modules/estudiantes.js';

const menu = () => {
  console.log("Selecciona una opción:");
  console.log("1. Listado de Estudiantes");
  console.log("2. Buscar Estudiante por ID o Nombre");
  console.log("3. Calcular Promedios por Estudiante");
  console.log("4. Filtrar Estudiantes por Promedio");
  console.log("5. Estudiantes Aprobados y Reprobados por Materia");
  console.log("6. Promedio General del Grupo");
  console.log("7. Promedio por Área");
  console.log("8. Ranking de Estudiantes");
  console.log("9. Salir");
};

const ejecutarOpcion = (opcion) => {
  switch (opcion) {
    case 1:
      console.log(generarListadoEstudiantes());
      break;
    case 2:
      const id = 1;  
      console.log(buscarEstudiante(id));
      break;
    case 3:
      console.log(calcularPromediosEstudiantes());
      break;
    case 4:
      console.log(filtrarEstudiantesPorPromedio(80));  
      break;
    case 5:
      console.log(obtenerEstudiantesAprobadosReprobados("Matematicas"));
      break;
    case 6:
      console.log(calcularPromedioGeneralGrupo());
      break;
    case 7:
      console.log(calcularPromedioPorArea());
      break;
    case 8:
      console.log(rankingEstudiantes());
      break;
    case 9:
      console.log("Saliendo...");
      break;
    default:
      console.log("Opción inválida.");
  }
};


menu();
ejecutarOpcion(1);  
