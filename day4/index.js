const fs = require("fs");

function checkEntry(entry) {
  const { byr, iyr, eyr, hgt, hcl, ecl, pid } = entry;

  if (!byr || !iyr || !eyr || !hgt || !hcl || !ecl || !pid) {
      return false;
  }

  if (byr.length !== 4 || Number(byr) < 1920 || Number(byr) > 2002 ) {
    return false;
  }

  if (iyr.length !== 4 || Number(iyr) < 2010 ||Number(iyr) > 2020) {
    return false;
  }

  if (eyr.length !== 4 || Number(eyr) < 2020 ||Number(eyr) > 2030) {
    return false;
  }

  const num = hgt.slice(0, hgt.length - 2);
  const unit = hgt.slice(hgt.length - 2);
  if (unit === 'in' && (Number(num) < 59 || Number(num > 76))) {
      return false;
  } else if (unit === 'cm' && (Number(num) < 150 || Number(num > 193))) {
      return false;
  } else if (unit !== 'in' && unit !== 'cm') {
      return false;
  }

  
}

async function main() {
  await fs.readFile("day4/data", "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const entries = data
        .split("\n\n")
        .map((e) => {
          let split1 = e.split("\n");
          let split2 = split1.reduce((acc, arr) => {
            return [...acc, ...arr.split(" ")];
          }, []);
          return split2;
        })
        .map((entry) => {
          return entry.reduce((acc, e) => {
            let [k, v] = e.split(":");
            acc[k] = v;
            return acc;
          }, {});
        });
      console.log(entries.length);
      console.log(entries.filter(checkEntry).length);
    }
  });
}

main();
