const fs = require('fs');

function hasSum(nums, sum) {
    const lesser = nums.filter(num => num <= sum);

    for (let i=0; i<lesser.length; i++) {
        for (let j=i+1; j<lesser.length; j++) {
            if (lesser[i] + lesser[j] === sum) {
                return true;
            }
        }
    }

    return false;
}

(async function main() {
    let lines = [];
    await fs.readFile('day9/data', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        lines = data.split('\n').map(str => Number(str));

        let i = 0
        let sum = 26;
        while (sum < lines.length) {
            let range = lines.slice(i, sum);
            if (!hasSum(range, lines[sum])) {
                console.log(lines[sum]);
                return;
            }
            i++;
            sum++;
        }
    });
})()


