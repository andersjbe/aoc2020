const fs = require("fs");

function checkPasswords(passwords) {
  const passed = passwords.filter((password) => _check(password));
  return passed.length;
}

function _check(entry) {
  let [times, char, password] = entry.split(" ");
  char = char[0];
  const [pos1, pos2] = times.split("-").map((time) => Number(time));

  if (password[pos1-1] === char && password[pos2-1] === char) {
    return false;
  } else if (password[pos1-1] === char || password[pos2-1] === char) {
    return true;
  } else {
    return false;
  }
}

async function main() {
  await fs.readFile("day2/data", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    // const entries = ["1-3 a: abcde", "1-3 b: cdefg", "2-9 c: ccccccccc"];
    const entries = data.split('\n');
    console.log(checkPasswords(entries));
  });
}

main();
