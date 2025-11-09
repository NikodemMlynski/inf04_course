# Java Console Programming & Algorithms — Learning Path

Ten materiał pomoże Ci przejść przez najważniejsze podstawy programowania w **Javie**, pokazując jak osiągnąć te same efekty, które znasz z Pythona — ale przy użyciu składni i struktur charakterystycznych dla Javy.

---

## 1_basics — Podstawy Javy

W Javie dane wczytujemy z konsoli za pomocą klasy `Scanner`. Każdy typ danych musi być zadeklarowany jawnie.  
Do uruchomienia programu w Javie zawsze potrzebna jest klasa z metodą `main`.

```java
import java.util.Scanner;

public class Basics1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Podaj imię: ");
        String name = scanner.nextLine();

        System.out.print("Podaj wiek: ");
        int age = scanner.nextInt();

        int year = 2025 - age;
        System.out.println("User name is " + name);
        System.out.println("User were born in " + year);
    }
}
```

### Typy danych
```java
int age = 7;
double temperature = 5.6564;
String name = "Tomek";
boolean isMale = true;
```

### Zadania:
1. **Średni poziom:** Napisz program, który pobierze imię i nazwisko użytkownika, a następnie wypisze jego imie nazwisko i wiek.  
2. **Trudne:** Napisz program, który pobierze date urodzenia użytkownika, dzień, miesiąc, rok, a następnie policzy ile dni przeżył
3. (dla uproszczenia przyjmijmy defaultową datę 11.11.2025 od której będziemy liczyć długość życia, oraz że wszystkie
4. miesiące mają 30 dni).

---

## 2_basics — Operatory, instrukcje warunkowe i pętle

### Operatory arytmetyczne i porównania

```java
public class Basics2 {
    public static void main(String[] args) {
        int a = 2;
        int b = 5;
        int c = 2;

        System.out.println(a + b); // 7
        System.out.println(a - b); // -3
        System.out.println(a * b); // 10
        System.out.println((double)b / a); // 2.5
        System.out.println(Math.pow(a, b)); // potęgowanie
        System.out.println(b / a); // dzielenie całkowite
        System.out.println(b % a); // reszta z dzielenia

        System.out.println(a == c);
        System.out.println(a != b);
        System.out.println(a < b);
    }
}
```

### Instrukcje warunkowe
```java
if (a < b) {
    System.out.println("a jest mniejsze od b");
}

if (b % 2 == 0) {
    System.out.println("b jest parzyste");
} else {
    System.out.println("b jest nieparzyste");
}
```

### Pętle
```java
int i = 5;
while (i < 10) {
    i++;
    System.out.println(i);
}

for (int j = 0; j < 10; j++) {
    System.out.println(j);
}
```

### Zadania:
1. **Średni poziom:** Napisz program, który wypisze liczby od 1 do 100, ale dla wielokrotności 3 wypisze „Fizz”, dla 5 — „Buzz”, a dla obu „FizzBuzz”.
2. **Trudne:** Stwórz kalkulator, który obsługuje działania (+, -, *, /) w pętli dopóki użytkownik nie wpisze „exit”.

---

## 3_methods - Metody (Funkcje)

W Javie funkcje są nazywane metodami, ponieważ w praktyce są metodami. Java jest językiem obiektowym, wszystko co piszemy
jest cześcią jakiejś klasy więc wtedy funkcje nazwya się metodami. Każda funkcja musi mieć swój typ. Dla ułatwienia
pod egzamin każdą funkcje będziemy też oznaczali jako statyczną poprzez dodawanie słowa `static` ponieważ nie będziemy 
żadnej funkcji wywoływali na obiekcie. Inaczej będziemy robić kiedy przejdziemy do programowania obiektowego w późniejszej
części kursu Javy.
```java
public class Main {
    public static void main(String[] args) {
        helloWorldPrinter();
        System.out.println(add(5, 2));
        count(5);
    }

    private static void helloWorldPrinter() {
        System.out.println("Hello World!");
    }

    private static int add(int a, int b) {
        return a + b;
    }
    private static void count(int n) {
        System.out.println("Counting...");
        for (int i = n; i >= 0; i--) {
            System.out.println(i);
        }
        System.out.println("Booooom");
    }
}
```


## 4_list — Tablice i kolekcje

W Javie używamy tablic (`arrays`) lub kolekcji z pakietu `java.util`, takich jak `ArrayList`.

```java
import java.util.ArrayList;
import java.util.Collections;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> cars = new ArrayList<String>();
        cars.add("BMW"); // dodaje "BMW" do listy
        cars.add("Volvo");
        cars.add("Ford");

        System.out.println(cars);

        System.out.println(cars.get(1)); // wyświetla element pod indeksem 1 czyli drugi "Volvo"

        System.out.println(cars.contains("BMW")); // sprawdza czy "BMW" istnieje w liście zwraca true
        System.out.println(cars.contains("Audi")); // zwróci false

        cars.set(0, "Audi"); // ustawia wartość pod indeksem 0 na "Audi" zamiast "BMW"
        cars.remove(1); // usuwa element pod indeksem 1
        // nie oznacza to że terasz lista nadal ma 3 elementy a drugi jest pusty tylko elementy
        // z późniejszych indeksów przesuną się o jeden w lewo

        System.out.println(cars);
        System.out.println(cars.size()); // pokazuje długość listy

        // iterowanie po tablicy
        for (int i = 0; i < cars.size(); i++) {
            System.out.println(cars.get(i));
        }
        System.out.println();
        // petla foreach
        for (String car : cars) {
            System.out.println(car);
        }
    }

}
```

### Zadania:
1. **Trudne:** Napisz funkcję, która przyjmuje listę i zwraca listę unikalnych elementów (bez użycia `Set`).
2. **Średnie** Napisz funkcje, która przyjmuje liste liczb typu zmiennoprzecinkowego i zwraca jej
3. średnią arytmetyczną.

---

## 5_set — Zbiory

Sety w Javie są częścią `java.util`. Najczęściej używa się `HashSet`.

```java
import java.util.HashSet;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        HashSet<String> fruits = new HashSet<>();

        // 🔹 2. Dodawanie elementów (duplikaty są ignorowane)
        fruits.add("apple");
        fruits.add("banana");
        fruits.add("orange");
        fruits.add("apple"); // duplikat - zostanie zignorowany
        System.out.println("Zbiór owoców: " + fruits);

        // 🔹 3. Sprawdzanie przynależności (czy element istnieje)
        System.out.println("Czy zawiera 'banana'? " + fruits.contains("banana"));

        // 🔹 4. Usuwanie elementu
        fruits.remove("orange");
        System.out.println("Po usunięciu 'orange': " + fruits);

        // 🔹 5. Rozmiar zbioru i sprawdzenie pustki
        System.out.println("Rozmiar zbioru: " + fruits.size());
        System.out.println("Czy zbiór pusty? " + fruits.isEmpty());

        // 🔹 6. Iteracja po zbiorze (kolejność przypadkowa)
        System.out.print("Iteracja: ");
        for (String f : fruits) System.out.print(f + " ");
        System.out.println();
    }

    public static ArrayList<String> getUniqueNames(ArrayList<String> names) {
        // Konwersja ArrayList na HashSet - automatyczne usunięcie duplikatów
        HashSet<String> uniqueSet = new HashSet<>(names);

        // Konwersja z powrotem na ArrayList
        return new ArrayList<>(uniqueSet);
    }

}
```

### Zadania:
1. **Średni poziom:** Napisz metode która przyjmie liste liczb i zwróci liste bez duplikatów, użyj `HashSet`.

---
---

## 6_strings — Operacje na tekstach

```java
import java.util.HashSet;
public class Main {
    public static void main(String[] args) {

        String s = "hello world";

        // 🔹 1. Dostęp do znaku i długość
        System.out.println("Pierwszy znak: " + s.charAt(0));
        System.out.println("Długość: " + s.length());

        // 🔹 2. Podciąg (substring)
        System.out.println("Pierwsze 5 liter: " + s.substring(0, 5));

        // 🔹 3. Odwracanie tekstu
        String reversed = new StringBuilder(s).reverse().toString();
        System.out.println("Odwrócone: " + reversed);

        // 🔹 4. Zmiana wielkości liter
        System.out.println("Duże litery: " + s.toUpperCase());
        System.out.println("Małe litery: " + s.toLowerCase());

        // 🔹 5. Podmiana tekstu
        System.out.println(s.replace("world", "java"));

        // 🔹 6. Iteracja po znakach
        System.out.print("Znaki: ");
        for (char c : s.toCharArray()) System.out.print(c + " ");
        System.out.println();

        // 🔹 7. Konwersja String → tablica słów (split)
        String sentence = "java python c++ java python";
        String[] words = sentence.split(" "); // dzieli po spacji
        System.out.println("Tablica słów: ");
        for (String w : words) System.out.print(w + " ");
        System.out.println();

        // 🔹 8. Usuwanie duplikatów ze słów za pomocą HashSet
        HashSet<String> uniqueWords = new HashSet<>();
        for (String w : words) uniqueWords.add(w);
        System.out.println("Unikalne słowa: " + uniqueWords);

        // 🔹 9. Konwersja tablicy na string (join)
        String joined = String.join(", ", words);
        System.out.println("Połączone słowa: " + joined);

        // 🔹 10. Odwrócenie słów w tablicy
        for (int i = 0; i < words.length / 2; i++) {
            String temp = words[i];
            words[i] = words[words.length - 1 - i];
            words[words.length - 1 - i] = temp;
        }
        System.out.println("Odwrócona tablica słów: " + String.join(" ", words));

        // 🔹 11. Sprawdzenie przynależności i indeksów
        System.out.println("Zawiera 'python'? " + sentence.contains("python"));
        System.out.println("Indeks 'java': " + sentence.indexOf("java"));
    }
}

```

### Zadania:
1. **Średni poziom:** Sprawdź, czy podany ciąg jest palindromem. (Czytany od końca tak samo jak od początku)
2. **Trudne:** Napisz program, który policzy liczbę słów w zdaniu i zwróci je posortowane według długości.

---


---

## 7_classes_and_oop — Klasy i obiektowość

```java
public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog("Puszek", 3);
        dog.bark();
        // System.out.println(dog.introduce())
        // metoda nie jest dostępna ponieważ jest private

        Calculator calc = new Calculator(2, 5);
        System.out.println(calc.sum());
        System.out.println(calc.multiply());
    }

}

class Dog {
    String name;
    int age;

    public Dog(String name, int age) {
        this.name = name;
        this.age = age;
    }
    public void bark() {
        System.out.println("Barking...");
    }
    private String introduce() {
        return "I am " + name + " and I am " + age + " years old";
    }
}

class Calculator {
    private int a;
    private int b;

    Calculator(int a, int b) {
        this.a = a;
        this.b = b;
    }
    public int sum() {
        return this.a + this.b;
    }
    public int multiply() {
        return this.a * this.b;
    }
}
```

### Zadania:
1. **Średni poziom:** Klasa `Student` z listą ocen, metodami `insertGrade()` i `averageGrade()`.
2. **Trudny poziom** Klasa `QuadraticFunction` przujmuje argumenty `a`,`b`,`c` typu zmiennoprzecinkowego. Ma funkcje
   QuadraticFunction(konstruktor), prywatną calculateDelta(), printSolutions wyświetlającą, x0 lub x1 i x2 lub brak
   rozwiązań, (ta funkcja korzysta z prywatnej funkcji calculateDelta()), valueAt(oblicz wartosc funkcji dla x),
   toString() zwraca funkcje w postaci `ax² + bx + c`
---

## 8_combined_data_structures - Kombinacja List, Tablic, Obiektów, Metod



# Rozwiązania do zadań

### 1_basics - Podstawy
1.Długość życia
```java
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        int todayDay = 11;
        int todayMonth = 11;
        int todayYear = 2025;

        int userDay = 29;
        int userMonth = 8;
        int userYear = 2007;

        int years = todayYear - userYear;
        int months = (years * 12) + todayMonth - userMonth;
        int days = (months * 30) + userDay - todayDay;
        System.out.println("Today day: " + days);

    }

}
```

### 2_basics - Operatory itd.
1. FizzBuzz
```java
public class Main {
    public static void main(String[] args) {
        for (int i = 0; i <= 100; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                System.out.println("FizzBuzz");
            } else if (i % 3 == 0) {
                System.out.println("Fizz");
            } else if (i % 5 == 0) {
                System.out.println("Buzz");
            } else {
                System.out.println(i);
            }
        }
    }

}
```
2. Calculator
```java
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("Podaj a: ");
            int a = scanner.nextInt();
            System.out.println("Podaj b: ");
            int b = scanner.nextInt();

            System.out.println("Wybierz operator (+, -, *, /: ");
            String operator = scanner.next();
            switch (operator) {
                case "+":
                    System.out.println(a + b);
                    break;
                case "-":
                    System.out.println(a - b);
                    break;
                case "*":
                    System.out.println(a * b);
                    break;
                case "/":
                    System.out.println(a / b);
                    break;
            }
            System.out.println("Continue (Y/N)?: ");
            if (!scanner.next().equals("Y")) {
                break;
            }
        }
    }

}
```

### 4_arrays - Tablice
```java
import java.util.ArrayList;
public class Main {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(1);
        list.add(2);
        list.add(2);
        list.add(3);
        ArrayList<Integer> list2 = getUniqueList(list);
        System.out.println(list2);
    }
    private static java.util.ArrayList<Integer> getUniqueList(java.util.ArrayList<Integer> list1) {
        java.util.ArrayList<Integer> uniqueElements = new java.util.ArrayList<Integer>();
        for (int i = 0; i < list1.size(); i++) {
            if(!uniqueElements.contains(list1.get(i))) {
                uniqueElements.add(list1.get(i));
            }
        }
        return uniqueElements;
    }

}
```


### 5_set - Sety
```java
import java.util.ArrayList;
import java.util.HashSet;
public class Main {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(1);
        list.add(1);
        list.add(2);
        list.add(2);
        list.add(3);
        list.add(4);
        ArrayList<Integer> uniqueList = getUniqueNumbers(list);
        System.out.println(uniqueList);
    }
    private static ArrayList<Integer> getUniqueNumbers(ArrayList<Integer> list) {
        HashSet<Integer> set = new HashSet<>(list);

        return new ArrayList<>(set);
    }

}
```


### 6_string - Stringi

```java
private static boolean checkIfPalindrome(String s) {
       String reversed = new StringBuilder(s).reverse().toString();
       return reversed.equals(s);
    }

private static void countAndSortWords(String s) {
        String[] words = s.split(" ");
        for (int i = 0; i < words.length; i++) {
            for (int j = 0; j < words.length - i - 1; j++) {
                if (words[j].length() > words[j+1].length()) {
                    String temp = words[j];
                    words[j] = words[j+1];
                    words[j+1] = temp;
                }
            }
        }

        for (int i = 0; i < words.length; i++) {
            System.out.println(words[i]);
        }
    }
```

### 7_oop - Klasy i Obiekty
1.Student:
```java
import java.util.HashSet;
import java.util.ArrayList;
public class Main {
    public static void main(String[] args) {
        Student s1 = new Student();
        s1.addGrade(2);
        s1.addGrade(5);
        s1.addGrade(6);
        System.out.println(s1.getAvgGrades());
    }

}

class Student {
    private ArrayList<Integer> grades;
    public Student() {
        grades = new ArrayList<>();
    }
    public void addGrade(int grade) {
        grades.add(grade);
    }
    public double getAvgGrades() {
        double sum = 0;
        for  (Integer grade : grades) {
            sum += grade;
        }
        return sum / grades.size();
    }
}

```
2. Funkcja kwadratowa:
```java
class QuadraticFunction {
    private double a;
    private double b;
    private double c;

    public QuadraticFunction(double a, double b, double c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    private double calculateDelta() {
        return (b * b) - 4 * a * c;
    }

    public void printSolutions() {
        if (a == 0) {
            System.out.println("To nie jest funkcja kwadratowa (a = 0).");
            return;
        }

        double delta = calculateDelta();

        if (delta < 0) {
            System.out.println("Brak rozwiązań rzeczywistych.");
        } else if (delta == 0) {
            double x0 = -b / (2 * a);
            System.out.println("x0 = " + x0);
        } else {
            double sqrtDelta = Math.sqrt(delta);
            double x1 = (-b - sqrtDelta) / (2 * a);
            double x2 = (-b + sqrtDelta) / (2 * a);
            System.out.println("x1 = " + x1);
            System.out.println("x2 = " + x2);
        }
    }

    public double valueAt(double x) {
        return a * x * x + b * x + c;
    }


    public String toString() {
        return String.format("f(x) = " + a + "x² + " + b + "x + " + c);
    }
}
```
