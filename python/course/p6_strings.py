s = "hello world"
print(s)
print(type(s)) # <class 'str'>

# wybieranie elementów lub przedziału elementów

print(s[0]) # pierwsza litera 'h'
print(s[-1]) # ostatnia litera 'd'
print(s[0:5]) # przedział do 0 indeksu (włącznie) do 
# 5 indeksu (wyłącznie)

print(s[::-1]) # odwrócenie stringa 'dlrow olleh'
# to działa w taki sposób [start_index, end_index, iterator]
# start_index - indeks od którego zaczynamy (włącznie)
# end_index - indeks na którym kończymy (wyłącznie)
# iterator - skok jaki wykonujemy: 
# 1 (default) czyli o jeden do przodu
# 2 o dwa do przodu
# -1 o jeden od końca do początku
# -2 o dwa od końca do początku

a = "hello"
b = "world"
print (a + " " + b) # łączenie stringów
print(f"{a} {b}") 
# f string, w nawiasy klamrowe {} możemy wstawiać zmienne
# f"{zmienna} jakis tekst {zmienna2}

# długość stringa 
print(len(s)) # 11


# konkatenacja stringów
a = "hello"
b = "python"
print(a + " " + b) # hello python


# sprawdzanie wartości
print("h" in a) # True

# zamiana liter na duze
a = "Hello"
print(a.upper()) # HELLO
# zamiana liter na male
print(a.lower()) # hello
# przydatne przy sprawdzaniu czy podane wartości są równe
# poniewaz Hello != hello


# robienie tablicy ze stringa
text = "apple,banana,cherry"
fruits = text.split(",")
print(fruits) # [apple, banana, cherry]

# odwrotna operacja czyli tworzenie stringa z tablicy
fruits_string = " ".join(words) # apple banana cherry

# zamiana

s = "hello world"
print(s.replace("world", "python")) # hello python
# zamieni slowo world na python

# iterowanie po stringu
string = "abcdefg"
for character in string:
    print(character)

# wykorzystanie substring do sprawdzania czy wyraz jest palindromem

word = "kajak"
print(word == word[::-1]) 
# sprawdzamu czy jak odwrócimy słowo to czy bedzie takie same


