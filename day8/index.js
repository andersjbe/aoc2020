const fs = require("fs");

function instructionsLoop(instructions) {
  let acc = 0;
  let i = 0;
  const seen = [];
  while (i < instructions.length) {
    let [inst, val] = instructions[i];
    if (seen.includes(i)) {
      return null;
    }
    seen.push(i);
    if (inst === "acc") {
      acc += Number(val);
      i += 1;
    } else if (inst === "jmp") {
      i += Number(val);
    } else if (inst === "nop") {
      i += 1;
    }
  }
  return acc;

}

async function main() {
  await fs.readFile("day8/data", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const instructions = data.split("\n").map((line) => line.split(" "));
    let res = null;
    for (let i=0; i<instructions.length; i++){
        // console.log(i)
        const altered = [...instructions]
        if (instructions[i][0] === 'jmp') {
            altered[i][0] = 'nop';
            res = instructionsLoop(altered)
        } else if (instructions[i][0] === 'nop') {
            altered[i][0] = 'jmp';
            res = instructionsLoop(altered)
        }

        if (res) {
            console.log(res)
        }
    }
  });
}

main()
