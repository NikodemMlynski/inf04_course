def bubble_sort(A):
    for i in range(len(A)-1):
        for j in range(len(A)-i-1):
            if A[j] > A[j+1]:
                temp = A[j]
                A[j] = A[j+1]
                A[j+1] = temp

arr = [4,6,1,6,1,7,33,7,8,1,3,68,4,2]
print(arr)
bubble_sort(arr)
print(arr)