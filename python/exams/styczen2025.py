from random import randint

class Array:
    def __init__(self, n):
        self.__array = []
        self.__n = n
        for i in range(n):
            self.__array.append(randint(1, 100))
        
    def display_array(self):
        for i in range(len(self.__array)):
            print(f"{i}: {self.__array[i]}")
    
    def find_index(self, num):
        for i in range(len(self.__array)):
            if self.__array[i] == num:
                return i
        return -1

    def display_and_count_odd_numbers(self):
        count = 0
        for i in range(len(self.__array)):
            if self.__array[i] % 2 != 0:
                print(self.__array[i])
                count += 1
        return count 
    
    def get_avg(self):
        suma = 0
        for num in self.__array:
            suma += num
        return suma / len(self.__array)



a = Array(21)
a.display_array()
print(f"index dal 5: {a.find_index(5)}")

count_odd_numbers = a.display_and_count_odd_numbers()
print(count_odd_numbers)
print(a.get_avg())
