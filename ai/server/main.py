import nltk
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from utils import preprocess_paragraph, add_to_db, get_recommendations, classify_complaint





app = FastAPI()



class ComplaintRequest(BaseModel):
    id: str
    complaint: str

@app.get('/greet/')
def greet():
    return {'greeting': 'Hello, world!'}


@app.post("/analysis/")
def analyse_complaint(request: ComplaintRequest):
    id = request.id
    complaint = request.complaint
    complaint = [float(i) for i in list(preprocess_paragraph(complaint))]
    # print(type(complaint), type(complaint[0]), complaint)
    recommended_ids = get_recommendations(complaint)
    relavant_authority = classify_complaint(complaint)
    return {
        'relevant_authority': relavant_authority,
        'recommended_ids': recommended_ids,
    }

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)
