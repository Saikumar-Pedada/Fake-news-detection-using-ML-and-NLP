# -*- coding: utf-8 -*-
"""
Created on Sat Jan 21 15:29:49 2023

@author: BAASHITH
"""
from flask import Flask, escape, request, render_template
import pickle
from sklearn.feature_extraction.text import TfidfVectorizer


vector = pickle.load(open("bin_vectorizer_TF_IDF.pkl",'rb'))

model = pickle.load(open("bin_finalized_model_SVM.pkl",'rb'))

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/prediction", methods=['GET','POST'])
def prediction():
    if request.method == "POST":
        ts_news = str(request.form['ts_news'])
        predict = model.predict(vector.transform([ts_news]))
        #print(predict)
        
        if predict == 1:
            return render_template("index.html", prediction_textsREAL= "Real News")
        else:
            return render_template("index.html", prediction_textsFAKE="Fake News")
        
    else:
        return render_template('index.html')



if __name__ == '__main__':
    app.run()