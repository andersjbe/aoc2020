const fs = require("fs");

function getOccupiedSeats(y, x, seats) {
  //   console.log({ y, x });
  let numOccupied = 0;

  //   console.log("NORTH");
  let north = y - 1;
  while (north >= 0) {
    if (seats[north][x] === "#") {
      numOccupied += 1;
      break;
    } else if (seats[north][x] === "L") {
      break;
    }
    north--;
  }

  //   console.log("NORTHEAST");
  let ne = [y - 1, x + 1];
  while (ne[0] >= 0 && ne[1] < seats[y].length) {
    if (seats[ne[0]][ne[1]] === "#") {
      numOccupied += 1;
      break;
    } else if (seats[ne[0]][ne[1]] === "L") {
      break;
    }
    ne[0] -= 1;
    ne[1] += 1;
  }

  //   console.log("EAST");
  let east = x + 1;
  while (east < seats[y].length) {
    if (seats[y][east] === "#") {
      numOccupied += 1;
      break;
    } else if (seats[y][east] === "L") {
      break;
    }
    east++;
  }

  //   console.log("SOUTHEAST");
  let se = [y + 1, x + 1];
  while (se[0] < seats.length && se[1] < seats[y].length) {
    if (seats[se[0]][se[1]] === "#") {
      numOccupied += 1;
      break;
    } else if (seats[se[0]][se[1]] === "L") {
      break;
    }
    se[0] += 1;
    se[1] += 1;
  }

  //   console.log("SOUTH");
  let south = y + 1;
  while (south < seats.length) {
    if (seats[south][x] === "#") {
      numOccupied += 1;
      break;
    } else if (seats[south][x] === "L") {
      break;
    }
    south++;
  }

  //   console.log("SOUTHWEST");
  let sw = [y + 1, x - 1];
  while (sw[0] < seats.length && sw[1] >= 0) {
    if (seats[sw[0]][sw[1]] === "#") {
      numOccupied += 1;
      break;
    } else if (seats[sw[0]][sw[1]] === "L") {
      break;
    }
    sw[0] += 1;
    sw[1] -= 1;
  }

  //   console.log("WEST");
  let west = x - 1;
  while (west >= 0) {
    if (seats[y][west] === "#") {
      numOccupied += 1;
      break;
    } else if (seats[y][west] === "L") {
      break;
    }
    west--;
  }

  //   console.log("NORTHWEST");
  let nw = [y - 1, x - 1];
  while (nw[0] >= 0 && nw[1] >= 0) {
    if (seats[nw[0]][nw[1]] === "#") {
      numOccupied += 1;
      break;
    } else if (seats[nw[0]][nw[1]] === "L") {
      break;
    }
    nw[0] -= 1;
    nw[1] -= 1;
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
      if (seat === "#" && numOccupied >= 5) {
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
