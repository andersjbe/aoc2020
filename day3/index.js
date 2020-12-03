const fs = require('fs');

function countTrees(lines) {
    let linePos = 0;
    let charPos = 0;
    let count = 0;


   while (linePos < lines.length) {
       if (lines[linePos][charPos] === '#') {
           count++;
       }
       linePos++;
       charPos += 3;
       if (charPos >= lines[0].length) {
           charPos = charPos - lines[0].length;
       }
   }
   console.log(count);
   return count;
}

async function main() {
    fs.readFile('day3/data', 'utf8', (err, data) => {
        if (err) {
            console.err(err);
        } else {
            const lines = data.split('\n');
            console.log(countTrees(lines));
        }
    });
}

main();
