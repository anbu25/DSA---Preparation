//bubble sort
//[7,4,6,5,3,2,1]
function BubbleSort(arr) {
  let arrLen = arr.length;
  while (arrLen) {
    let i = 0, j = 1;
    while (j < arrLen) {
      let item1 = arr[i];
      let item2 = arr[j];
      if (item1 > item2) {
        arr[j] = item1;
        arr[i] = item2;
      }
      i++; j++;
    }
    arrLen--;
  }
  return arr;
}

console.log(BubbleSort([8, 7, 4, 9, 6, 5, 3, 2, 1]));