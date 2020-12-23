const fs = require("fs");

const Ship = require("./ship");

async function main() {
  fs.readFile("day12/data", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    // data = "F10\nN3\nF7\nR90\nF11";
    const instructions = data.split("\n").map((row) => {
      const inst = [];
      inst.push(row.slice(0, 1));
      inst.push(Number(row.slice(1)));
      return inst;
    });

    const ship = new Ship();
    ship.location();

    instructions.forEach((inst) => {
      degrees = 0;
      switch (inst[0]) {
        case "N":
          ship.move(inst[1], "north");
          break;

        case "S":
          ship.move(inst[1], "south");
          break;

        case "E":
          ship.move(inst[1], "east");
          break;

        case "W":
          ship.move(inst[1], "west");
          break;

        case "L":
          degrees = inst[1];
          while (degrees > 0) {
            ship.turnLeft();
            degrees -= 90;
          }
          break;

        case "R":
          degrees = inst[1];
          while (degrees > 0) {
            ship.turnRight();
            degrees -= 90;
          }
          break;

        case "F":
          ship.move(inst[1]);
          break;

        default:
          break;
      }
      ship.location();
    });
  });
}

main();
