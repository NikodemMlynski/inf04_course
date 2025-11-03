
arr = []
print(i)

n = 100

def fill_array(arr, n):
    for i in range(n + 1):
        arr.append(True)


def eratostenes(arr, n):
    for i in range(2, int(n**0.5) + 1):
        if arr[i] == True:
            for j in range(2 * i, n + 1, i):
                arr[j] = False 

fill_array(arr, n)

eratostenes(arr, n)

def display_first_numbers(arr, n):
    for i in range(2, n + 1):
        if arr[i] == True:
            print(i)

display_first_numbers(arr, n)
