# operatory arutmetyczne

a = 2
b = 5
print(a + b) # dodawanie: 2 + 5 = 7
print(a - b) # odejmowanie 2 - 5 = -3
print(a * b) # mnożenie: 2 * 5 = 10
print(b / a) # dzielenie: 5 / 2 = 2.5
print(a ** b) # potęgowanie: 2 ** 5 = 32
print(b // a) # dzielenie całkowite: 5 // 2 = 2
print(b % a) # reszta z dzielenia: 5 % 2 = 1

# operatory porównania
c = 2
print(a == c) # sprawdzanie czy wartośc jest taka sama: True
print(a != b) # sprawdzanie czy wartośc jest różna: True
print(a != c) # tak samoe jak wyżej: False
print(a > c) # operator większości: False
print(a >= c) # operator większe równe: True
print(a < b) # opeartor mniejsze: True
print(a <= c) # operator mniejsze równe: True

print(b % 2 == 0) # reszta z dzielenia == 0: False ponieważ b % 2 = 1

# instrukcje warunkowe

if a < b:
    print("a jest mniejsze od b")

if b % 2 == 0:
    print("b jest parzyste")

if b % 2 != 0:
    print("b jest nieparzyste")

# pętle

# while
# pętla while wykonuje sie tak dlugo az warunek podany
# w nawiasie przestaje byc spelniony

i = 5
while (i < 10):
    i += 1 # operator inkrementacji (zwiększa i o 1)
    print(i)

i = 10

while (i > 0):
    i -= 2 # operator dekrementacji (zmniejsza i o 2)
    print(i)

i = 10
while (i == 0): # taka petla nie wywola sie w ogole ponieważ nie jest spelniony warunek
    print(i)


# while (True): # warunek jest spelniony caly czas
#     print("To jest nieskonczona petla")


# for

for i in range(10): # range to funkcja ktora otrzymuje ile razy ma sie wykonac operacja
    print(i)


# funkcje
# funkcje tworzymy po to gdy mamy jakis kawalek kodu
# który chcemy użyć kilka razy, to piszemy funkcje którą
# potem wywołujemy i nie musimy powtarzać logiki

def get_and_print_user_data(): # definicja funkcji
    name = input("Podaj imie: ")
    age = int(input("Podaj wiek: "))
    year = 2025 - age
    print(f"Mam na imie {name} i urodzilem sie w {str(year)} roku")

get_and_print_user_data() # wywolanie funkcji

def add(a, b):
    print(a + b)

add(2, 5)

def substract(a, b):
    return a - b # return zwraca wartosc z funkcji

returned_value = substract(5, 3) # tą wartość zwróconą z funkcji
# możemy przechwycić do zmiennej
print(returned_value)

# lub od razu wyświetlić 
print(substract(2, 5))