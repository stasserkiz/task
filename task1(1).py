import numpy as np

A = np.array([[1, 2, 3],
              [0, 1, 2],
              [0, 2, 2]])

B = np.array([
    [1], 
    [1], 
    [0]])


X = np.linalg.solve(A, B)

X_transposed = X.T

print("Розв'язок системи:")
print("X^T =", X_transposed)


input("Нажміть ентер для виходу...")