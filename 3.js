/* 3
Написать функцию, котоая разбивает переданный массив arr на группы длиной size.
function chunkArrayInGroups(arr, size) {
  // your code
}
chunkArrayInGroups(["a", "b", "c", "d"], 2); // [["a", "b"], ["c", "d"]]
*/

function chunkArrayInGroups(arr, size) {
  if (arr.length % size !== 0) {
    throw new Error("error!");
  }
  
  let new_arr = [];
  
  for (let i = 0; i < arr.length; i += size) {
    new_arr.push(arr.slice(i, i + size))
  }
  
  return new_arr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

/* function chunkArrayInGroups(arr, size) {
  let new_arr = [];
  for (let i = 0; i < size; i++) {
    let tmp = [];
    for (let j = 0; j < arr.length / size && j < arr.length - i * Math.ceil(arr.length / size); j++) {
      tmp.push(arr[i * Math.ceil(arr.length / size) + j]);
    } 
    new_arr[i] = tmp.slice();
  }
  return new_arr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 3));
*/
