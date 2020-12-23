const fs = require("fs");

async function main() {
  await fs.readFile("day10/data", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const voltages = data
      .split("\n")
      .map((line) => Number(line))
      .sort((a, b) => a - b);
    voltages.unshift(0);
    console.log(voltages);
    const differences = [null, 0, 0, 1];
    for (let i = 1; i < voltages.length; i++) {
      const difference = voltages[i] - voltages[i - 1];
      console.log(voltages[i - 1], voltages[i], difference);
      differences[difference] += 1;
    }
    console.log(differences);
    console.log(differences[1] * differences[3]);
  });
}

main();
