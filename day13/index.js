function main() {
  //   const data = `939\n7,13,x,x,59,x,31,19`;
  const data =
    "1002392\n23,x,x,x,x,x,x,x,x,x,x,x,x,41,x,x,x,37,x,x,x,x,x,421,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,17,x,19,x,x,x,x,x,x,x,x,x,29,x,487,x,x,x,x,x,x,x,x,x,x,x,x,13";
  const [earliestTime, busIds] = data.split("\n");
  const buses = busIds.split(",").map((el) => {
    if (el !== "x") {
      return Number(el);
    }
    return el;
  });
  console.log(buses);
  //   let currentTime = earliestTime;
  //   while (true) {
  //     for (let i = 0; i < buses.length; i++) {
  //       if (currentTime % buses[i] === 0) {
  //         console.log((currentTime - earliestTime) * buses[i]);
  //         return;
  //       }
  //     }
  //     currentTime++;
  //   }
  for (let i = 100000000000011; true; i += buses[0]) {
    let broke = false;
    console.log(i);
    for (let j = 1; j < buses.length; j++) {
      if (buses[j] !== "x") {
        continue;
      }
      if ((i + j) % buses[j] !== 0) {
        broke = true;
        break;
      }
    }
    if (!broke) {
      console.log(i);
      return;
    }
  }
}

main();
