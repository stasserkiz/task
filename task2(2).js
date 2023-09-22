function createEmptyMatrix(rows, cols) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
      matrix.push(new Array(cols).fill(0));
    }
    return matrix;
  }
  
  // Функція для створення випадкової матриці зі значеннями 1 або 0
  function createRandomMatrix(rows, cols) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
      matrix.push([]);
      for (let j = 0; j < cols; j++) {
        matrix[i].push(Math.round(Math.random()));
      }
    }
    return matrix;
  }
  
  // Функція для визначення кількості живих сусідів для заданої клітинки
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
  // Функція про умову життя та не життя клітинок
  function updateMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const newMatrix = createEmptyMatrix(rows, cols);
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const liveNeighbors = countLiveNeighbors(matrix, i, j);
        if (matrix[i][j] === 1) {
          if (liveNeighbors === 2 || liveNeighbors === 3) {
            newMatrix[i][j] = 1; 
          } else {
            newMatrix[i][j] = 0; 
          }
        } else {
          if (liveNeighbors === 3) {
            newMatrix[i][j] = 1; 
          } else {
            newMatrix[i][j] = 0; 
          }
        }
      }
    }
  
    return newMatrix;
  }
  
 
  const rows = 7; 
  const cols = 7; 
  let generation = 0;
  let interval;
  let matrix = createRandomMatrix(rows, cols); 
  
  console.log("Початкова матриця:");
  console.log(matrix);
  

  function simulateGeneration() {
    matrix = updateMatrix(matrix);
    console.log(`Ітерація ${generation}:`);
    console.log(matrix);
    generation++;
  }

  function startSimulation() {
    if (!interval) {
      interval = setInterval(simulateGeneration, 1000); 
    }
  }

  startSimulation();

