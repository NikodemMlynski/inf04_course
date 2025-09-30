# Definicja klasy

class Dog:
    # tworzymy atrybut rasy
    species = "Maltańczyk"

dog1 = Dog()
dog2 = Dog()
print(dog1.species)
print(dog2.species)


# konstruktor

class Dog:
    def __init__(self, name, age):
        # ustawiamy atrybuty klasy na te podane w konstruktorze
        self.name = name
        self.age = age 
    

dog1 = Dog("Harry", 3)
dog2 = Dog("Puszek", 5)

print(dog1.name, dog1.age)
print(dog2.name, dog2.age)


# metody

class Cat:
    def __init__(self, name):
        self.name = name 
    
    # każda metoda musi zawierać self jako pierwszy parametr
    # żeby mogła się odwoływać do pól i innych metod klasy
    def meow(self):
        return "f{self.name} robi meow!"


cat1 = Cat("Garfield")
cat1.meow()


# atrybuty klasy a atrybuty instancji:

class Car:
    wheels = 4 
    # to jest atrybut klasy, który dla każdej klasy będzie taki sam

    def __init__(self, brand):
        self.brand = brand

car1 = Car("Audi")
car2 = Car("BMW")

# dla obu obiektów atrybut wheels będzie taki sam, ale atrybut brand będzie taki 
# jak podany w konstruktorze 
print(car1.wheels, car1.brand) 
print(car2.wheels, car2.brand) 


# Dziedziczenie
# polega na dziedziczeniu atrybutów i metod z klasy bazowej

class Animal:
    def __init__(self, name):
        self.name = name 

    def speak(self):
        return "Some sound"

# w klasach Dog oraz Cat nie musimy deklarować konstruktorów ponieważ ten jest już 
# zdefiniowany w klasie bazowej Animal
# tak samo nie definiujemy metody speak tylko ją nadpisujemy
# gdybyśmy nie nadpisali metody speak to zwracała by "Some sound" tak jak w klasie Animal

class Dog(Animal):
    def speak(self):
        return f"{self.name} says woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says meow!"

dog = Dog("Puszek")
cat = Cat("Garfield")

print(dog.speak())
print(cat.speak())


# Enkapsulacja

# polega to na tym że atrybuty klasy są prywatne żeby użytkownik miał jak najbardziej
# ograniczone pole manewru przy modyfikacji tych atrybutów

# dlatego tworzymy gettery i settery
# setter - to metoda ustawiająca wartośc atrybutu (deposit)
# getter - to metoda zwracająca wartośc atrybutu
class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self.__balance = balance 
        # w pythonie aby oznaczyć pole jako prywatne dajemy __ z przodu

    def deposit(self, amount):
        self.__balance += amount 
    
    def get_balance(self):
        return self.__balance 

account = BankAccount("Tomek", 100)
account.deposit(50)
print(account.get_balance())


# zadania:

# 1- stwórz klasę Student:
# atrybuty: name, grades(lista ocen)
# metody: 
# - insert_grade(grade) - wstawiająca ocene
# - average_grade() - zwracająca średnią arytmetyczną z ocen

class Student():
    def __init__(self, name):
        self.name = name 
        self.grades = []
    
    def insert_grade(self, grade):
        self.grades.append(grade)
    
    def average_grade(self):
        sum_of_grades = 0
        for grade in self.grades:
            sum_of_grades += grade 
        return sum_of_grades / len(self.grades)

s1 = Student("Tomek")
s1.insert_grade(5)
s1.insert_grade(1)
s1.insert_grade(3)
print(f"Average Grades for {s1.name}: {s1.average_grade()}")


# 2 - symulacja biblioteki
# - klasa Book - atrybuty(title, author, isAvailable)
# - klasa Library:
#   - atrybuty: lista książek
#   - metody: borrow_book(title), return_book(title)
#   - show_available_books
# zakładamy że każdej książki w bibliotece jest jeden egzemplarz
# kiedy wypożyczamy książkę to będzie ona niedostępna w bibliotece
# kiedy zwracamy książkę książka w bibliotece znowu powinna być dostępna

class Book:
    def __init__(self, title, author):
        self.title = title 
        self.author = author 
        self.isAvailable = True 
        # True - początkowo jest dostępna ponieważ nikt jeszcze nie wypożyczył

class Library:
    def __init__(self):
        self.books = [
            Book("Hobbit", "J.R.R Tolkien"),
            Book("Lalka", "Bolesław Prus"),
            Book("1984", "George Orwell"),
            Book("Wesele", "Stanisław Wyspiański")
        ]      

    def find_book_by_title(self, title):
        for book in self.books:
            if book.title == title:
                return book 
    
    def borrow_book(self, title):
        book = self.find_book_by_title(title)
        book.isAvailable = False 
    
    def return_book(self, title):
        book = self.find_book_by_title(title)
        book.isAvailable = True 
    
    def show_available_books(self):
        print("Dostępne książki: ")
        for book in self.books:
            if book.isAvailable:
                print(f"{book.title}, {book.author}")
        print()
    def show_borrowed_books(self):
        print("Wypożyczone książki: ")
        for book in self.books:
            if not book.isAvailable:
                print(f"{book.title}, {book.author}")
        print()
l1 = Library()
l1.borrow_book("1984")
l1.show_available_books()
l1.show_borrowed_books()
l1.return_book("1984")
l1.show_available_books()

# 3. Kształty

# napisz klase bazową Shape z metodą pustą area()
# napisz klase Rectangle dziedziczaca po shape
# - atrybuty: width, height
# - metoda: area() -> width * height

# napisz klase Triangle dziedziczaca po shape
# - atrybuty: base, height
# - metoda: area() -> (base * height) / 2

class Shape:
    def area(self):
        raise NotImplementedError("Klasa dziedziczaca musi zaimplementowac metode")

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width 
        self.height = height
    
    def area(self):
        return self.width * self.height 

class Triangle(Shape):
    def __init__(self, base, height):
        self.base = base 
        self.height = height 

    def area(self):
        return (self.base * self.height) / 2

# z racji tego że klasy Triangle oraz Rectangle mają te same metody możemy 
# obiekty tych klas umieścić w tablicy, przeiterować po nich i wywołać ich metode area

shapes = [
    Rectangle(4, 6),
    Triangle(5, 2)
]

for shape in shapes:
    print(f"{shape.__class__.__name__} area = {shape.area()}")