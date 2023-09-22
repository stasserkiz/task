import numpy as np

matrixA = np.empty((3,3))
matrixB = np.empty((3,1))

for i in range(3):
    for j in range(3):
        matrixA[i][j] = int(input(f"Write your i and j : [{i}][{j}]: "))

for i in range(3):
    for j in range(1):
        matrixB[i][j] = int(input(f"Write your i and j : [{i}][{j}]: "))

X = np.linalg.solve(matrixA, matrixB)

X_transposed = X.T

print("Розв'язок системи:")
print("X^T =", X_transposed)


input("Press Enter to exit...")
