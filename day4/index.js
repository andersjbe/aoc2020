const fs = require('fs');

function checkEntry(entry) {
    return 'byr' in entry &&
            'iyr' in entry &&
            'eyr' in entry &&
            'hgt' in entry &&
            'hcl' in entry &&
            'ecl' in entry &&
            'pid' in entry;
}

async function main() {
    await fs.readFile('day4/data', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const entries = data.split('\n\n').map(e => {
                let split1 = e.split('\n');
                let split2 = split1.reduce((acc, arr) => {
                    return [...acc, ...arr.split(' ')];
                }, []);
                return split2;
            }).map(entry => {
                return entry.reduce((acc, e) => {
                    let [k, v] = e.split(':');
                    acc[k] = v;
                    return acc;
                }, {});
            });
            console.log(entries.length)
            console.log(entries.filter(checkEntry).length);

        }
    });
}

main()
