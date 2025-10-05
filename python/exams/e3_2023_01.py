def euklides(a, b):
    while a != b:
        if a > b:
            a = a - b
        else:
            b = b - a
    return a 

a = int(input("Podaj pierwsza liczbe: "))
b = int(input("Podaj druga liczbe: "))
print(euklides(a, b))