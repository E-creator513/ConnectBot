import sqlite3
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

def get_recommendations(new_person_skills, new_person_interests, top_n=5):
    # Connect to SQLite database
    conn = sqlite3.connect('data/engineers_programmers.db')
    cursor = conn.cursor()
    
    # Fetch all people data
    cursor.execute('SELECT id, name, skills, interests FROM people')
    people = cursor.fetchall()
    
    # Close connection
    conn.close()
    
    # Prepare data for vectorization
    skills_list = [person[2] for person in people] + [new_person_skills]
    interests_list = [person[3] for person in people] + [new_person_interests]
    
    # Vectorize skills and interests
    vectorizer = TfidfVectorizer()
    skills_matrix = vectorizer.fit_transform(skills_list)
    interests_matrix = vectorizer.fit_transform(interests_list)
    
    # Calculate similarity
    skills_similarity = cosine_similarity(skills_matrix[-1], skills_matrix[:-1])
    interests_similarity = cosine_similarity(interests_matrix[-1], interests_matrix[:-1])
    
    # Combine similarity scores (average)
    combined_similarity = (skills_similarity + interests_similarity) / 2
    
    # Get top N recommendations
    top_indices = combined_similarity[0].argsort()[-top_n:][::-1]
    recommendations = [{'name': people[i][1], 'similarity_score': combined_similarity[0][i]} for i in top_indices]
    
    return recommendations