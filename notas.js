let nombre = prompt("Ingresa tu nombre:");
let sociales = prompt("Digita la nota de Sociales:");
let ingles = prompt("Digita la nota de Inglés:");
let filosofia = prompt("Digita la nota de Filosofía:");
let promedio = (sociales * 1 + ingles * 1 + filosofia * 1) / 3;

if (sociales >= 3.5) {
  console.log("Aprobaste Sociales");
} else {
  console.log("No aprobaste Sociales");
}

if (ingles >= 3.5) {
  console.log("Aprobaste Inglés");
} else {
  console.log("No aprobaste Inglés");
}

if (filosofia >= 3.5) {
  console.log("Aprobaste Filosofía");
} else {
  console.log("No aprobaste Filosofía");
}
console.log("Estudiante: " + nombre);
console.log("Sociales: " + sociales);
console.log("Inglés: " + ingles);
console.log("Filosofía: " + filosofia);
console.log("Promedio final: " + promedio);