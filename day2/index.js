const fs = require("fs");

function checkPasswords(passwords) {
  const passed = passwords.filter(password => _check(password));
  return passed.length;
}

function _check(entry) {
    let [times, char, password] = entry.split(' ');
    char = char[0];
    times = times.split('-').map(time => Number(time));

    let count = 0;
    for (let i=0; i<password.length; i++) {
        if (password[i] === char) {
            count++;
        }
    }

    if (count >= times[0] && count <= times[1]) {
        return true;
    } else {
        return false
    }
}

async function main() {
  await fs.readFile("day2/data", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const entries = data.split('\n');
    console.log(checkPasswords(entries));
  });
}

main()