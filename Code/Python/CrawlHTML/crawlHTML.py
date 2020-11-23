import bs4
import pandas
import requests

url = 'https://www.imdb.com/search/title/?count=100&groups=top_1000&sort=user_rating%27'

def get_page_content(url):
   page = requests.get(url,headers={"Accept-Language":"en-US"})
   return bs4.BeautifulSoup(page.text,"html.parser")
soup = get_page_content(url)


movies = soup.findAll('h3')

print(len(movies))
for x in movies:
    f = open("D:\\AH-LongQuan\\FIle\\test.txt", "a")
    f.write(x.get_text())
    f.close()
    print(x.get_text())

