# set to taka lista, która zawiera tylko unikalne elementy
# czyli elementy nie mogą się powtarzać

s = {1, 2, 3}

# dodawanie elementów do setu
s.add(4)
s.add(1) # element sie nie doda ponieważ 1 już jest w setcie

# wybieranie elementów z setu
# - nie można bezpośrednio odwyołać się do elementu z setu
# za pomocą indeksu bądź klucza
# ale można przekonwertować set na listę i wtedy otrzymać element
# po indeksie

list_from_set = list(s)
print(list_from_set[0])

# usuwanie elementów z setu
s.remove(1) # usunie element o wartości 1
print(s)

# sprawdzanie czy element jest w setcie
print(4 in s) # True
print(6 in s) # False

# tworzenie setów na bazie listy (przydatne w otrzymaniu tablicy unikalnych elementów)

list1 = [1, 2, 2, 4, 7, 3, 3]
set1 = set(list1)
print(set1) # nie ma już duplikatów jak było w tablicy

# iterowanie po setcie

s2 = {1, 3, 4, 6, 2}

# odbywa się tak samo jak po tablicy
# nie można odwoływać się po indeksie więc
# działa tylko iteracja foreach lub enumerate

for el in s2:
    print(el)

for key, val in enumerate(s2):
    print(key, val)    

