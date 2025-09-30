# more complex lists

people = [
    {"name": "Tomek", "age": 19, "major": "programming"},
    {"name": "Kuba", "age": 18, "major": "robotics"},
    {"name": "Fabian", "age": 19, "major": "IT"},
    {"name": "Maks", "age": 19, "major": "Computer networks"},
    {"name": "Asia", "age": 18, "major": "programming"}
]

# filtrowanie listy
# 1. szukamy ludzi o kierunku programista

programmers = []

for person in people:
    if person["major"] == "programming":
        programmers.append(person)

for programmer in programmers:
    print(f"{programmer["name"]}, {programmer["age"]} lat")


# 1 ćwiczenie: analiza częstotliwości występowania słów
    # - pobierz zdanie z konsoli, każde słowo z osobna w tablicy
    # - policz ilość występowania każdego słowa
    # - wypisz unikalne słowa w konsoli
    # - posortuj słowa malejąco na bazie ilości ich występowania
    # - wypisz posortowane słowa w takim formacie:
        # słowo1: 4
        # słowo2: 3
        # słowo3: 3
        # słwo2: 1

# pobieramy z konsoli i zapisujemy każde słowo z osobna w tablicy
# sentence = input("Podaj zdanie:\n")
# words = sentence.split(" ")

# zliczamy ilośc wystąpienia słów za pomocą słownika w takim formacie:
# klucz: wartość => słowo: ilość_wystąpień

# words_count = {}
# for word in words:
#     if word in words_count.keys():
#         words_count[word] += 1
#     else:
#         words_count[word] = 1

# # pokazujemy unikalne słowa
# unique_words = set(words)

# print("Unikalne słowa: ")
# for word in unique_words:
#     print(word)

# # sortowanie słów po częstotliwości występowania

# def check_if_in_sorted_words(sorted_words, key):
#     for word in sorted_words:
#         if key == word["word"]:
#             return True 
#     return False

# def sort_words_by_frequency(words_count):
#     sorted_words = []
#     for i in range(len(words_count)):
#         max_frequency_word = {"word": "", "frequency": 0}
#         for key, value in words_count.items():
#             if check_if_in_sorted_words(sorted_words, key):
#                 continue
#             if value > max_frequency_word["frequency"]:
#                 max_frequency_word = {"word": key, "frequency": value}
#         sorted_words.append(max_frequency_word)
    
#     return sorted_words

# sorted_words = sort_words_by_frequency(words_count)

# def display_sorted_words(sorted_words):
#     for word in sorted_words:
#         print(f"{word["word"]}: {word["frequency"]}")
        

# display_sorted_words(sorted_words)

# ćwiczenie 2:
#  - wczytaj ilość numerów które chce podać użytkownik
#  - w pętli która będzie miała tyle przejść ile zostało podane przez 
#  - użytkownika w pierwszym kroku, pobierz liczby i zapisz w tablicy
#  - usuń duplikaty
#  - wyświetl w formacie liczba1-liczba2-...-liczban

# wczytujemy ilośc elementów - n elementów
number_of_numbers = int(input("Podaj ilośc liczb które chcesz podać:\n"))

# w pętli mającej n-przejść wczytujemy kolejne liczby
numbers = []
for i in range(number_of_numbers):
    number = int(input("Podaj liczbe: "))
    numbers.append(number)

# usuwamy duplikaty
unique_numbers = list(set(numbers))

# konwertujemy tablice liczb na tablice stringów
string_numbers = []
for number in unique_numbers:
    string_numbers.append(str(number))

# wypisujemy w stringu
print("-".join(string_numbers))

