import pandas as pd 
import numpy as np 
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
#Helper Functions:
def get_title_from_index(index):
	return df[df.index == index]["title"].values[0]
def get_index_from_title(title):
	return df[df.title == title]["index"].values[0]

#Read CSV File
df = pd.read_csv("movie_dataset.csv")
#Print df.columns

#Select Features
features = ["keywords", "cast", "genres", "director"]

#Create column inside of df that combines every selected feature
for feature in features:
	df[feature] = df[feature].fillna("")

def combine_feature(row):
	try: 
		return row["keywords"] + " " + row["cast"] + " " + row["genres"] + " " + row["director"]
	except:
		print "ERROR", row

df["combined_features"] = df.apply(combine_features,axis = 1)

#Print Combined Features and df["combined_features"].head()

#Create Count Matrix from newly formed column

cv = CountVectorizer()

count_matrix = cv.fit_transform(df["combined_features"])

#Calculate cosine similarity based on count_matrix
cosine_sim = cosine_similarity(count_matrix)
movie_user_likes = "Avatar"

#Get index of this movie from the title

movie_index = get_index_from_title(movie_user_likes)

similar_movies = list(enumerate(cosine_sim[movie_index]))

#Attain list of similar movies in decreasing order of similarity
sorted_similar_movies = sorted(similar_movies, key = lambda x: x[1], reverse = True)

#Print titles of 1st 50 movies
i = 0
for element in sorted_similar_movies:
	print get_title_from_index(element[0])
	i = i + 1
	if i > 50:
		break
		