const { count } = require('console');
const fs = require('fs')

function countGroup(group) {
    const set = new Set()

    group.forEach(str => {
        for (let i = 0; i<str.length; i++) {
            set.add(str[i]);
        }
    });

    return set.size;
}

function main() {
    fs.readFile('day6/data', 'utf8', (err, data) => {
        if (err) {
            console.error(err)
        }

        const groups = data.split('\n\n').map(str => str.split('\n'));
        console.log(groups.reduce((acc, group) => {
            return acc + countGroup(group);
        }, 0));
    });
}

main();