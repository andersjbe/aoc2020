const fs = require('fs');

function hasShiny(bagColor, bags) {
    const stack = [bagColor];
    const visited = [];

    while (stack.length) {
        let color = stack.pop();
        if (color.includes('shiny gold')) {
            return true;
        }
        visited.push(color)
        if(color in bags) {

            Object.keys(bags[color]).forEach(bag => {
                if (!visited.includes(bag)) {
                    stack.push(bag);
                }
            });
        }
    }

    return false;
}

async function main() {
    fs.readFile('day7/data', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return
        }
        const bags = data.split('\n')
            .map(bag => bag.split(' bags contain '))
            .reduce((acc, arr) => {
                if (arr[1].includes('no other')) {
                    let obj = {}
                    let k = arr[0]
                    obj[k] = {}
                    acc[k] =[]
                    return acc
                }

                acc[arr[0]] = arr[1].split(', ').reduce((acc, bag) => {
                    if (bag[0] === '1') {
                        let k = bag.slice(2, bag.length - 4);
                        if (k[k.length - 1] === ' ') {
                            k = k.slice(0, k.length-1)
                        }
                        acc[k] = Number(bag[0])
                    } else {
                        let k = bag.slice(2, bag.length - 5)
                        if (k[k.length - 1] === ' ') {
                            k = k.slice(0, k.length-1)
                        }
                        acc[k] = Number(bag[0])
                    }
                    return acc;
                }, {});

                return acc;
            }, {} );
        fs.writeFile('day7/data.json', JSON.stringify(bags), (err) => {
             if (err) {
                 console.error(err);
             }
        });
        console.log(Object.keys(bags).filter((color) => hasShiny(color, bags)).length)
        // console.log(Object.keys(bags).length)
    });
}

main();
