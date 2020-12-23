const fs = require("fs");

function maskedParse(num, mask) {
  let bits = num.toString(2);
  bits = "0".repeat(36 - bits.length) + bits;
  bits = bits
    .split("")
    .map((bit, i) => {
      if (mask[i] === "X") {
        return bit;
      } else {
        return mask[i];
      }
    })
    .join("");
  let newNum = parseInt(bits, 2);
  return newNum;
}

async function main() {
  await fs.readFile("day14/data", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const blocks = data.split("\n\n");
    // console.log(blocks);
    let mem = new Array(100000).fill(0);
    blocks.forEach((block) => {
      lines = block.split("\n");
      mask = lines[0].slice(7);
      const instructions = lines.slice(1).map((l) => l.split(" = "));
      console.log(instructions);
      instructions.forEach(([memAddress, value]) => {
        memAddress = Number(memAddress.slice(4, memAddress.length - 1));
        console.log(maskedParse(Number(value), mask));
        mem[memAddress] = maskedParse(Number(value), mask);
      });
    });
    memValues = mem.filter((item) => item !== 0 && typeof item === "number");
    console.log(memValues.reduce((acc, val) => acc + val));
  });
}

main();
