# $ virtualenv -p python3 env3
# $ source ./venv/bin/activate
# $ deactivate
# when in venv and in api directory: $ pip install python-dotenv

import sys
from flask import Flask, request
from flask_cors import CORS
import random, json
import movie_recommender

app = Flask(__name__)
CORS(app)

@app.route('/home', methods=['GET'])
def index():
    movies = {}
    i = 0
    for movie in movie_recommender.sorted_similar_movies:
        movies[i] = {"id": i, "name": movie_recommender.get_title_from_index(movie[0])}
        i += 1
        if i == 30:
            break
    return movies

@app.route('/request', methods=['POST'])
def blob():
    data = request.get_json()
    #print(data)
    # avatar = data["movie"]
    # index = movie_recommender.get_index_from_title(avatar)
    # similar = list(enumerate(cosine_sim[movie_index]))
    like = data["movie"]
    index = movie_recommender.get_index_from_title(like)
    similar = list(enumerate(movie_recommender.cosine_sim[index]))
    movies = sorted(similar, key = lambda x: x[1], reverse=True)

    # print(movie_recommender.get_title_from_index(movies[1][0]))
    wanted = {}
    i = 0
    for movie in movies:
        wanted[i] = {"id": i, "name": movie_recommender.get_title_from_index(movie[0])}
        i += 1
        # print(wanted[i])
        if i == 10:
            break
    return wanted
    # return {"hi": "hi"}

if __name__ == '__main__':
    app.run("0.0.0.0", "5030", debug=True)