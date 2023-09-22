function createEmptyMatrix(rows, cols) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
      matrix.push(new Array(cols).fill(0));
    }
    return matrix;
  }


  function countLiveNeighbors(matrix, x, y) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let count = 0;
  
    const neighbors = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1],           [0, 1],
      [1, -1], [1, 0], [1, 1]
    ];
  
    for (const [dx, dy] of neighbors) {
      const newX = x + dx;
      const newY = y + dy;
      if (newX >= 0 && newX < rows && newY >= 0 && newY < cols) {
        count += matrix[newX][newY];
      }
    }
  
    return count;
  }

  function updateMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const newMatrix = createEmptyMatrix(rows, cols);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const liveNeighbors = countLiveNeighbors(matrix, i, j);
      if (matrix[i][j] === 1) {
        if (liveNeighbors === 2 || liveNeighbors === 3) {
          newMatrix[i][j] = 1; // Жива клітинка залишається жити
        } else {
          newMatrix[i][j] = 0; // Жива клітинка помирає
        }
      } else {
        if (liveNeighbors === 3) {
          newMatrix[i][j] = 1; // Мертва клітинка оживає
        } else {
          newMatrix[i][j] = 0; // Мертва клітинка залишається мертвою
        }
      }
    }
  }

  return newMatrix;
}

const startMatrix = [
[1,0,0,0,0,0,0],
[0,0,1,0,0,1,1],
[1,0,0,1,0,0,1],
[0,1,1,0,1,1,0],
[1,1,1,1,0,0,1],
[1,1,1,1,1,1,1],
[1,1,0,1,1,0,1]
]

const rows = 7; 
const cols = 7; 
let matrix = startMatrix; 

console.log("Початкова матриця:");
console.log(matrix);

let generation = 7; 
  matrix = updateMatrix(matrix);
  console.log(`Ітерація ${generation}:`);
  console.log(matrix);


