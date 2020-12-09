const { count } = require('console');
const fs = require('fs')

function countGroup(group) {
    const sets = [];

    group.forEach(str => {
        const set = new Set();
        for (let i = 0; i<str.length; i++) {
            set.add(str[i]);
        }
        sets.push(set);
    });

    let all = []
    sets.forEach(set => all = [...all, ...set])
    const union = new Set(all)

    let count = 0;
    union.forEach(char => {
        let res = sets.every(set => set.has(char));
        if (res) {
            count++;
        }
    });
    // const intersection = [...sets[0]];
    // for(let i=1; i<sets.length; i++) {
    //     intersection.filter()
    // }
    return count
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