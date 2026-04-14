import joblib
import numpy as np

model = joblib.load("model/model.pkl")
label_encoder = joblib.load("model/label_encoder.pkl")
soil_encoder = joblib.load("model/soil_encoder.pkl")

def predict_crop(temp, humidity, rainfall, soil):
    soil_encoded = soil_encoder.transform([soil])[0]

    features = np.array([[temp, humidity, rainfall, soil_encoded]])
    
    pred = model.predict(features)
    crop = label_encoder.inverse_transform(pred)[0]

    return crop