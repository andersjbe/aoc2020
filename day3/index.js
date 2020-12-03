const fs = require('fs');

function countTrees(lines, right, down) {
    let linePos = 0;
    let charPos = 0;
    let count = 0;


   while (linePos < lines.length) {
       if (lines[linePos][charPos] === '#') {
           count++;
       }
       linePos += down;
       charPos += right;
       if (charPos >= lines[0].length) {
           charPos = charPos - lines[0].length;
       }
   }
   return count;
}

async function main() {
    fs.readFile('day3/data', 'utf8', (err, data) => {
        if (err) {
            console.err(err);
        } else {
            const lines = data.split('\n');
            console.log(countTrees(lines, 1, 1) * countTrees(lines, 3, 1) * countTrees(lines, 5, 1) * countTrees(lines, 7, 1) * countTrees(lines, 1, 2));
        }
    });
}

main();
