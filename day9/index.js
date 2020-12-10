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

function findContiguousNums(nums, sum) {
    for (let i=0; i<nums.length; i++) {
        for (let j=nums.length-1; j>i+1; j--) {
            let range = nums.slice(i, j+1)
            let constiguousSum = range.reduce((acc, num) => acc + num, 0);
            if (sum === constiguousSum) {
                const min = range.reduce((num, acc) => {
                    if (num < acc) acc = num;
                    return acc;
                }, Infinity)
                const max = range.reduce((num, acc) => {
                    if (num > acc) acc = num;
                    return acc;
                }, -Infinity)
                return min + max
            }
        }
    }
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
                console.log(findContiguousNums(lines, lines[sum]));
                return;
            }
            i++;
            sum++;
        }
    });
})()


