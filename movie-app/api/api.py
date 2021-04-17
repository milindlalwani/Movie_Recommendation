# $ virtualenv -p python3 env3
# $ source ./venv/bin/activate
# $ deactivate
# when in venv and in api directory: $ pip install python-dotenv

from flask import Flask
import movie_recommender

app = Flask(__name__)

@app.route('/home', methods=['GET'])
def index():
    movies = {}
    i = 0
    for movie in movie_recommender.sorted_similar_movies:
        movies[i] = {'id': i, 'name': movie_recommender.get_title_from_index(movie[0])}
        i += 1
        if i == 30:
            break
    return movies

if __name__ == '__main__':
    app.run("0.0.0.0", "5030", debug=True)