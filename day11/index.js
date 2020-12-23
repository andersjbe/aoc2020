const fs = require("fs");

function getOccupiedSeats(y, x, seats) {
  let numOccupied = 0;
  if (y > 0 && seats[y - 1][x] === "#") {
    numOccupied += 1;
  }
  if (y < seats.length - 1 && seats[y + 1][x] === "#") {
    numOccupied += 1;
  }
  if (x > 0 && seats[y][x - 1] === "#") {
    numOccupied += 1;
  }
  if (seats[y][x + 1] === "#") {
    numOccupied += 1;
  }
  if (y > 0 && x > 0 && seats[y - 1][x - 1] === "#") {
    numOccupied += 1;
  }
  if (y > 0 && seats[y - 1][x + 1] === "#") {
    numOccupied += 1;
  }
  if (y < seats.length - 1 && x > 0 && seats[y + 1][x - 1] === "#") {
    numOccupied += 1;
  }
  if (y < seats.length - 1 && seats[y + 1][x + 1] === "#") {
    numOccupied += 1;
  }

  return numOccupied;
}

function round(seats) {
  const newSeats = seats.map((row) => row.slice());

  for (let i = 0; i < seats.length; i++) {
    for (let j = 0; j < seats[i].length; j++) {
      let numOccupied = getOccupiedSeats(i, j, seats);
      let seat = seats[i][j];
      if (seat === "L" && numOccupied === 0) {
        newSeats[i][j] = "#";
      }
      if (seat === "#" && numOccupied >= 4) {
        newSeats[i][j] = "L";
      }
    }
  }

  return newSeats;
}

async function main() {
  await fs.readFile("day11/data", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    // let seats = `L.LL.LL.LL\nLLLLLLL.LL\nL.L.L..L..\nLLLL.LL.LL\nL.LL.LL.LL\nL.LLLLL.LL\n..L.L.....\nLLLLLLLLLL\nL.LLLLLL.L\nL.LLLLL.LL`
    //   .split("\n")
    //   .map((row) => row.split(""));
    let seats = data.split("\n").map((row) => row.split(""));

    console.log(seats.map((row) => row.join("")).join("\n"));
    let numRounds = 0;
    while (numRounds < 500) {
      seats = round(seats);
      //   console.log("\n");
      //   console.log(seats.map((row) => row.join("")).join("\n"));
      let totalOccupied = seats.reduce((acc, row) => {
        let num = row.filter((seat) => seat === "#").length;
        return acc + num;
      }, 0);
      console.log(totalOccupied);
      numRounds++;
    }
  });
}

main();
