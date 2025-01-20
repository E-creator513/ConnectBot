import sqlite3
from faker import Faker

# Initialize Faker
fake = Faker()

# Connect to SQLite database (or create it)
conn = sqlite3.connect('data/engineers_programmers.db')
cursor = conn.cursor()

# Create table
cursor.execute('''
CREATE TABLE IF NOT EXISTS people (
    id INTEGER PRIMARY KEY,
    name TEXT,
    bio TEXT,
    skills TEXT,
    interests TEXT
)
''')

# Generate and insert fake data
num_people = 250
skills_list = ['Python', 'JavaScript', 'Java', 'C++', 'SQL', 'React', 'Angular', 'Django', 'Flask', 'Node.js', 'Machine Learning', 'Data Science', 'AI', 'NLP']
interests_list = ['Technology', 'Open Source', 'Gaming', 'Reading', 'Music', 'Travel', 'Sports', 'Movies', 'Coding', 'Robotics']

for _ in range(num_people):
    name = fake.name()
    bio = fake.text(max_nb_chars=200)
    skills = ", ".join(fake.random_choices(elements=skills_list, length=5))
    interests = ", ".join(fake.random_choices(elements=interests_list, length=5))
    
    cursor.execute('''
    INSERT INTO people (name, bio, skills, interests)
    VALUES (?, ?, ?, ?)''', (name, bio, skills, interests))

# Commit and close connection
conn.commit()
conn.close()