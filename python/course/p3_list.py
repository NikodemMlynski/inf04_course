
array_int = [1, 2, 3, 4, 5, 6]
print(array_int)

array_str = ["Tomek", "Asia", "Kuba", "Maks"]
print(array_str)

# list operations

# Tworzenie listy
numbers = [1, 2, 3, 4]
# dodaje element na koniec listy
numbers.append(5) 
# dodaje element pod podany indeks
numbers.insert(2, 99)

# dostęp do elementów tablicy
print(numbers[0]) # wyświetli pierwszy element tablicy
numbers[0] = 5 # ustawi pierwszy element tablicy na 5


# Removing elements
numbers.remove(99) # usuwa pierwsze wystąpienie liczby 99
last = numbers.pop() # usuwa ostatni element z listy

# szukanie elementów
# zwróci indeks pierwszego wystąpienia liczby 2
finded_el_index = numbers.index(2)
print(finded_el_index)

# wybieranie przedziałów elementów listy
numbers2 = [1, 2, 3, 4, 5]
# od pierwszego indeksu (włącznie) do czwartego indeksu (wyłącznie)
print(numbers2[1:4]) 

# sortowanie 
# sort modyfikuje oryginalną tablice
unsorted_numbers1 = [4, 3, 11, 6, 2]
unsorted_numbers1.sort()
print(unsorted_numbers1)

# sorted nie modyfikuje orgynalnej tablicy tylko zwraca nową

unsorted_numbers2 = [4, 1, 5, 7, 3]
sorted_numbers2 = sorted(unsorted_numbers2)
print(unsorted_numbers2)
print(sorted_numbers2)

# iterowanie po tablicy

# 1. za pomocą indeksów
arr = [5, 3, 6, 5, 12, 3]

for i in range(len(arr)):
    print(arr[i])

# 2. za pomocą pętli foreach

for element in arr:
    print(element)

# 3. za pomocą funkcji tablicowych 
# (podaje enumerate ponieważ przydaje sie na egzaminie)

for index, element in enumerate(arr):
    print(f"index {index}: element: {element}")


# sprawdzanie czy element jest w liście
arr3 = [1, 2, 3, 4]
print(1 in arr3) # zwróci True ponieważ jest w liście
print(5 in arr3) # zwróci False


