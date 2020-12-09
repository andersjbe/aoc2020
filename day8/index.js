const fs = require('fs');

async function main() {
    await fs.readFile('day8/data', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        const instructions = data.split('\n').map(line => line.split(' '));
        let acc = 0;
        let i = 0;
        const seen = []
        while (true) {
            let [inst, val] = instructions[i];
            if (seen.includes(i)) {
                console.log(acc);
                return acc;
            }
            seen.push(i);
            if (inst === 'acc') {
                acc += Number(val);
                i += 1;
            } else if (inst === 'jmp') {
                i += Number(val);
            } else if (inst === 'nop') {
                i += 1
            }
        }
    });
}

main().then(res => console.log(res))
