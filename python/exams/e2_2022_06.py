from random import randint

def generate_list():
    arr = []
    for i in range(50):
        arr.append(randint(1, 100))
    return arr 

def find_el_index(arr, el):
    size = len(arr)
    arr.append(el)

    i = 0
    while (arr[i] != el):
        i += 1

    return -1 if size == i else i 

def display_array(arr):
    str_arr = []
    for el in arr:
        str_arr.append(str(el))
    print(", ".join(str_arr))

def display_element_status(arr, el):
    index = find_el_index(arr, el)
    if index == -1:
        print(f"element {el} not found")
    else:
        print(f"element {el} found at index: {index}")

num = int(input("Wprowadź liczbe ktora chcesz znalesc w tablicy: "))
arr = generate_list()
display_array(arr)
display_element_status(arr, num)
