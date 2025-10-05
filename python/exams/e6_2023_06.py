def generate_array(n):
    arr = [] 
    for i in range(1, n+2):
        arr.append(True)

    return arr 
    

def get_first_numbers(n):
    A = generate_array(n)
    for i in range(2, n+1):
        if A[i] == True:
            for j in range(2*i, n+1, i):
                A[j] = False
    return A 


def fill_first_numbers_array(bool_arr):
    arr = []
    for idx, val in enumerate(bool_arr):
        if val == True:
            arr.append(str(idx))
    return arr 

def display_first_numbers(arr):
    print("Liczby pierwsze z przedziału 1 - 100")
    print(", ".join(arr))

bool_arr = get_first_numbers(101)
first_numbers = fill_first_numbers_array(bool_arr)
display_first_numbers(first_numbers)