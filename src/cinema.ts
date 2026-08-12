
let theaterSeats: string[][] = [];
const seatLetter: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const rows = 8;
const seatsPerRow = 10;

// Initialize the matrix with "X" where X indicates an empty seat
for (let i = 0; i < rows; i++) {
  const row: string[] = [];
  for (let j = 0; j < seatsPerRow; j++) {
    row.push("X");
  }
  theaterSeats.push(row);
}

function printSeating(matrix: string[][]): void {
  console.log("Movie Theater Seating Chart:");
  console.log("   " + seatLetter.slice(0, seatsPerRow).join(" | "));
  for (let i = 0; i < matrix.length; i++) {
    console.log(`${i}: ` + matrix[i].join(" | "));
  }
}

printSeating(theaterSeats);