# dict to struktura danych która jest tworzona na zasadzie
# key: value czyli klucz: wartość

# tutaj Tomek jest wartością klucza name
# tak samo 19 jest wartością klucza age
person = {
    "name": "Tomek",
    "age": 19
}

# dostawanie się do wartości dict
print(person["name"])

# modyfikowanie danych słownika
person["age"] = 20

# dodawanie nowych wartości do słownika
person["city"] = "Gdańsk"

print(person) # {'name': 'Tomek', 'age': 20, 'city': 'Gdańsk'}

# usuwanie pola z słownika (pole to para klucza i wartości)
del person["city"]
print(person) # nie będziue już city: Gdańsk

# iterowanie po słowniku

for k, v in person.items():
    print(f"{k}: {v}")

