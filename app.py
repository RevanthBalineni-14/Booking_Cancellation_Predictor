from flask import Flask, request, jsonify
import joblib
import numpy as np
from sklearn.exceptions import InconsistentVersionWarning
from sklearn.neighbors import KNeighborsClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.naive_bayes import GaussianNB
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC
from sklearn.tree import DecisionTreeClassifier

app = Flask(__name__)

# Load your models outside the route
model_knn = joblib.load("models/model_knn.joblib")
model_lr = joblib.load("models/model_lr.joblib")
model_nb = joblib.load("models/model_nb.joblib")
# model_rd = joblib.load("models/model_rd.joblib")
model_svc = joblib.load("models/model_svc.joblib")
model_dtc = joblib.load("models/model_dtc.joblib")

@app.route('/predict', methods=['POST', 'OPTIONS'])
def predict():
    if request.method == 'OPTIONS':
        # Respond to the OPTIONS request
        response = app.make_default_options_response()
    else:
        try:
            # Get the JSON data from the request
            data = request.get_json()

            # Extract the input data and selected model from the request
            input_data = np.array([value for key, value in data['input_data'].items()]).reshape(1, -1)
            selected_model = int(data.get('selectedModel', '0'))
            # Print for debugging
            print(f"Model: {selected_model}")
            print(f"input_data: {input_data}")

            # Perform predictions based on the selected model
            if selected_model == 1:
                predictions = model_knn.predict(input_data)
            elif selected_model == 2:
                predictions = model_lr.predict(input_data)
            elif selected_model == 3:
                predictions = model_nb.predict(input_data)
            # elif selected_model == 4:
            #     predictions = model_rd.predict(input_data)
            elif selected_model == 5:
                predictions = model_svc.predict(input_data)
            elif selected_model == 6:
                predictions = model_dtc.predict(input_data)
            else:
                raise ValueError(f'Invalid model selection: {selected_model}')

            # Return the predictions as JSON
            response = jsonify({'predictions': predictions.tolist()})
        except Exception as e:
            response = jsonify({'error': str(e)})

    # Allow requests from any origin
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    response.headers.add('Access-Control-Allow-Methods', 'POST, OPTIONS')

    return response

if __name__ == '__main__':
    app.run(debug=True)
