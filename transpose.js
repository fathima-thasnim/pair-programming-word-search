const transpose = function(matrix) {
  let newArray = [];
  for (let i = 0; i < matrix[0].length; i++) {
    newArray.push([])
  }
for (let j = 0; j < matrix.length; j++) {
    for (let k = 0; k < matrix[j].length; k++) {
      console.log(matrix[k]);
      newArray[k].push(matrix[j][k]);
    }
}
return newArray;
};
module.exports= transpose;
// Do not edit this function.
const printMatrix = (matrix) => {
    for (const row of matrix) {
        for (const el of row) {
            process.stdout.write(el + " ");
        }
        process.stdout.write('\n')
    }
}
// printMatrix(transpose([
//   [1, 2, 3, 4],
//   [1, 2, 3, 4],
//   [1, 2, 3, 4],
//   [1, 2, 3, 4]
// ]));
// console.log('----')
// printMatrix(transpose([
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ]));
// console.log('----')
// printMatrix(transpose([
//   [1, 2, 3, 4, 5, 6, 7]
// ]));