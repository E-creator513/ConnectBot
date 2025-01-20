import unittest
from utils.recommendation import get_recommendations

class TestRecommendation(unittest.TestCase):
    def test_recommendations(self):
        skills = "Python, Machine Learning, Data Science, AI, NLP"
        interests = "Technology, AI, Reading, Music, Travel"
        recommendations = get_recommendations(skills, interests, top_n=3)
        
        self.assertIsInstance(recommendations, list)
        self.assertEqual(len(recommendations), 3)
        self.assertIn('name', recommendations[0])
        self.assertIn('similarity_score', recommendations[0])

if __name__ == '__main__':
    unittest.main()