class String:
    @staticmethod
    def count_vowels(word):
        if word is None:
            return 0
        sum = 0
        for char in word:
            if char in "aąeęiouóyAĄEĘIOUÓY":
                sum += 1
        return sum 

    @staticmethod
    def delete_repetitions(word):
        if word is None:
            return ""
        
        chars = set()
        new_word = ""
        for char in word:
            if char not in chars:
                new_word += char
                chars.add(char)
        return new_word

print(String.count_vowels("dfsjlaklnkfdsavcxcvvwe9ndvkdsl"))
print(String.delete_repetitions("Abba;;;to zespół"))

    

