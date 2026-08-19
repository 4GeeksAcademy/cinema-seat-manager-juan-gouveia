
let theaterSeats: string[][] = [];
const seatLetter: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const rows = 8;
const seatsPerRow = 10;

// Inicia la matriz de asientos con todos los asientos libres ("X")
for (let i = 0; i < rows; i++) {
  const row: string[] = [];
  for (let j = 0; j < seatsPerRow; j++) {
    row.push("X");
  }
  theaterSeats.push(row);
}

// Esta función cuenta el número de asientos libres ("X").
function freeSeats(matrix: string[][]): number {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === "X") {
        count++;
      }
    }
  }
  return count;
}

// Esta función cuenta el número de asientos ocupados ("L").
function occupiedSeats(matrix: string[][]): number {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === "L") {
        count++;
      }
    }
  }
  return count;
}

// Esta función reserva un asiento específico si está libre.
function reserveSeat(matrix: string[][], row: number, seat: number): void {
  // Validación de que el asiento está dentro del rango válido
  if (row < 0 || row >= matrix.length || seat < 0 || seat >= matrix[row].length) {
    console.log("Selección de asiento inválida.");
    return;
  }
   // Marca el asiento como ocupado
  if (matrix[row][seat] === "X") {
    matrix[row][seat] = "L";
    console.log(`Asiento ${seatLetter[seat]}${row} reservado con éxito.`);
  } else {
    console.log(`Asiento ${seatLetter[seat]}${row} ya está ocupado.`);
  }
}

// Con esto encontramos y devolvemos el primer par de asientos adyacentes que estén libres. Si no hay asientos adyacentes disponibles, devuelve un mensaje indicando que no hay asientos juntos.
function findTwoAdjacentSeats(matrix: string[][]): { row: number; seat1: number; seat2: number } | string {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length - 1; j++) {
      if (matrix[i][j] === "X" && matrix[i][j + 1] === "X") {
        return { row: i, seat1: j, seat2: j + 1 };
      }
    }
  }
  return "No hay asientos juntos disponibles.";
}

// Con esto imprimimos la matriz, los asientos libres, ocupados y el primer par de asientos adyacentes disponibles.
function printSeating(matrix: string[][], freeSeatsCount: number, adjacentSeats: { row: number; seat1: number; seat2: number } | string): void {
  console.log("Selección de asientos:");
  console.log("   " + seatLetter.slice(0, seatsPerRow).join(" | "));
  for (let i = 0; i < matrix.length; i++) {
    console.log(`${i}: ` + matrix[i].join(" | "));
  }
  console.log(`Total de asientos libres: ${freeSeatsCount}`);
  console.log(`Total de asientos ocupados: ${occupiedSeats(matrix)}`);
  console.log(`Asientos adyacentes disponibles: ${typeof adjacentSeats === "string" ? adjacentSeats : `Fila ${adjacentSeats.row}, Asientos ${seatLetter[adjacentSeats.seat1]} y ${seatLetter[adjacentSeats.seat2]}`}`);
}

printSeating(theaterSeats, freeSeats(theaterSeats), findTwoAdjacentSeats(theaterSeats));