from flask import Flask, request, jsonify
from flask_cors import CORS
from utils.recommendation import get_recommendations

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/recommend', methods=['POST'])
def recommend():
    data = request.json
    new_person_skills = data.get('skills')
    new_person_interests = data.get('interests')
    
    if not new_person_skills or not new_person_interests:
        return jsonify({'error': 'Skills and interests are required'}), 400
    
    recommendations = get_recommendations(new_person_skills, new_person_interests)
    return jsonify(recommendations)

if __name__ == '__main__':
    app.run(debug=True)