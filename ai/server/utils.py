import nltk
import re
import pickle
from nltk.stem import WordNetLemmatizer
import torchtext.vocab as vocab
import numpy as np

import os
from dotenv import load_dotenv
import pinecone
from nltk.tokenize import word_tokenize

load_dotenv()

pinecone_api_key = os.environ.get("PINECONE_API_KEY")
authorities = ['foreign_ministry', 'education_ministry', 'health_ministry','district_admin', 'police_depart', 'transport_depart','ward_office']

pinecone.init(api_key=pinecone_api_key, environment="gcp-starter")
index_name = 'ashokandsadhana'
index = pinecone.Index(index_name)

loaded_model = None
model_path = ""
with open(os.path.join(model_path, "svm_model.pkl"), "rb") as f:
  loaded_model = pickle.load(f)

nltk.download('punkt')
nltk.download('wordnet')
nltk.download('stopwords')
from nltk.corpus import stopwords
eng_stopwords = stopwords.words('english')

glove = vocab.GloVe(name='6B', dim=100)
lemmatizer = WordNetLemmatizer()

def clean_text(original_string):
    string = re.sub("http\S+", " ", original_string.lower())

    # Decontraction
    string = re.sub(r"n\'t", " not", string)
    string = re.sub(r"\'re", " are", string)
    string = re.sub(r"\'s", " is", string)
    string = re.sub(r"\'d", " would", string)
    string = re.sub(r"\'ll", " will", string)
    string = re.sub(r"\'t", " not", string)
    string = re.sub(r"\'ve", " have", string)
    string = re.sub(r"\'m", " am", string)

    # Removing Punctuations and numbers
    string = re.sub('[^a-z]+', ' ', string)

    return string


preprocess_paragraph = lambda input_text: np.mean([glove[lemmatizer.lemmatize(token, pos='v')].numpy() for token in word_tokenize(clean_text(input_text)) if token not in eng_stopwords], axis=0)


def add_to_db(vectors):
    """
        vectors (_type_): dictionary of id(str) and vector
    """
    pass
    index.upsert(
    vectors=vectors
)
    
    
def get_recommendations(vector):
    """vector : list of 100 dims"""
    recommendations = index.query(
        vector=vector,
        top_k=5,
        include_values=False
    )
    id_list = [match['id'] for match in recommendations.get('matches', [])]

    return id_list

def classify_complaint(vector):
    """vector : list of 100 dims"""
    
    
    
    return authorities[loaded_model.predict((np.array(vector)).reshape(1, -1))[0]]
