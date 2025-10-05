class Note:
    __count = 0

    def __init__(self, title, content):
        Note.__count += 1
        self.__id = Note.__count
        self.__title = title 
        self.__content = content

    def display(self):
        print(f"{self.__title}\n{self.__content}")
    
    def display_diagnostic(self):
        print(f"id: {self.__id}; title: {self.__title}; content: {self.__content}; notes count: {Note.__count} ")
    

note1 = Note("note1", "tresc notatki 1")
note2 = Note("note2", "tresc 2")

note1.display()
note2.display()
note1.display_diagnostic()
note2.display_diagnostic()