
class ArraySorter:
    def __init__(self):
        self.array = []
        input_array = input("Wpisz tablice w formacie: 1,2,3 :\n")
        for number in input_array.split(","):
            self.array.append(int(number))
        print(self.array)

    def find_max_value_index(self, start_index):
        max_value_index = start_index
        for i in range(start_index, len(self.array)):
            if self.array[i] > self.array[max_value_index]:
                max_value_index = i
        return max_value_index

    def sort_array(self):
        for i in range(len(self.array)-1):
            max_value_index = self.find_max_value_index(i)
            temp = self.array[i]
            self.array[i] = self.array[max_value_index]
            self.array[max_value_index] = temp


a = ArraySorter()
a.sort_array()
print(a.array)
        
    