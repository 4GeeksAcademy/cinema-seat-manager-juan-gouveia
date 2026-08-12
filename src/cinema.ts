
let theaterSeats: string[][] = [];
const rows = 8;
const seatsPerRow = 10;

// Initialize the matrix with "Empty" seats
for (let i = 0; i < rows; i++) {
  const row: string[] = [];
  for (let j = 0; j < seatsPerRow; j++) {
    row.push("Empty");
  }
  theaterSeats.push(row);
}

function printSeating(matrix: string[][]): void {
  console.log("Movie Theater Seating Chart:");
  for (let i = 0; i < matrix.length; i++) {
    console.log(`Row ${i}: ` + matrix[i].join(" | "));
  }
}

printSeating(theaterSeats);