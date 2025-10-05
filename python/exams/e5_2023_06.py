class Movie:
    def __init__(self):
        self.__title = ""
        self.__downloads = 0
    
    def set_title(self, title):
        self.__title = title 

    def get_title(self):
        return self.__title 
    
    def get_downloads(self):
        return self.__downloads 
    
    def download(self):
        self.__downloads += 1

movie = Movie()
movie.set_title("Star wars")
print(movie.get_title())
movie.download()
movie.download()
movie.download()
print(movie.get_downloads())
