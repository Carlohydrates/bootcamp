// const myPromise = new Promise(async (resolve, reject) => {
//   console.log("Doing my laundry.");
//   await setTimeout(() => {
//     resolve("Done with my laundry");
//   }, 1000);
// });

// myPromise.then((res) => {
//   console.log("Result: ", res);
// });

const timer = new Promise(async (resolve, reject) => {
  let num = 0;
  if (num === 100) {
    resolve("Done!");
  } else {
    await setInterval(() => {
      console.log("Loading... ", num, "%");
      num++;
    }, 100);
  }
});

timer.then((res) => {
  console.log(res);
});
