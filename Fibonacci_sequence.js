let arr = [];

function feb(n) {
  if (n === 1) {
    arr = [0];
  } else if (n === 2) {
    arr = [0, 1];
  } else {
    arr = [0, 1];
    for (let i = 2; i < n; i++) {
      arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
    }
   
    return arr;
  }
}
console.log(feb(11));
