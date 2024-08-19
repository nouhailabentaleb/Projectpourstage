from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import pymysql
pymysql.install_as_MySQLdb()

app = Flask(__name__)
CORS(app)

# Configure the MySQL database
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:nouhaila123456@localhost/users'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Define a Contact model
class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(150), nullable=False)
    company = db.Column(db.String(150))
    email = db.Column(db.String(150), nullable=False)
    phone = db.Column(db.String(20))
    subject = db.Column(db.String(150))
    budget = db.Column(db.Float)  # Use Float for numeric values
    message = db.Column(db.Text, nullable=False)
    
    def _init_(self, full_name, company, email, phone, subject, budget, message):
        self.full_name = full_name
        self.company = company
        self.email = email
        self.phone = phone
        self.subject = subject
        self.budget = budget
        self.message = message

    def _repr_(self):
        return f'<Contact {self.full_name}>'

# Create the database and tables
with app.app_context():
    db.create_all()

@app.route('/api/contact', methods=['POST'])
def create_contact():
    try:
        data = request.get_json()
        new_contact = Contact(
            full_name=data['full_name'],
            company=data.get('company', ''),
            email=data['email'],
            phone=data.get('phone', ''),
            subject=data.get('subject', ''),
            budget=data.get('budget', 0.0),  # Set a default value if budget is not provided
            message=data['message']
        )
        db.session.add(new_contact)
        db.session.commit()
        return jsonify({'message': 'Contact created successfully!'}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 400






# Additional API routes
@app.route('/api/home', methods=['GET'])
def get_home_data():
    data = {"message": "Welcome to Rocketme Up!"}
    return jsonify(data)

@app.route('/api/about', methods=['GET'])
def get_about_data():
    data = {"message": "Learn more about us on this page."}
    return jsonify(data)

@app.route('/api/services', methods=['GET'])
def get_services_data():
    data = {"message": "Explore our services here."}
    return jsonify(data)

@app.route('/api/blog', methods=['GET'])
def get_blog_data():
    data = {"message": "Read our latest blog posts."}
    return jsonify(data)

# Service-specific API routes
@app.route('/api/services/strategy', methods=['GET'])
def get_strategy_data():
    data = {
        "title": "Strategy",
        "services": [
            "Market Research",
            "Brand Strategy",
            "SWOT Analysis",
            "DATA Analysis",
            "Customer Journey Mapping",
            "Technology Assessments",
            "Stakeholders Workshops",
            "Innovation Consulting"
        ]
    }
    return jsonify(data)

@app.route('/api/services/design', methods=['GET'])
def get_design_data():
    data = {
        "title": "Design",
        "services": [
            "Logo & Brand Identity",
            "Art & Illustration",
            "Web Design",
            "Responsive Web Design",
            "2D/3D Graphic Design",
            "Motion Design",
            "Packaging Design",
            "Print Materials"
        ]
    }
    return jsonify(data)

@app.route('/api/services/development', methods=['GET'])
def get_development_data():
    data = {
        "title": "Development",
        "services": [
            "Front-end Development",
            "Back-end / API Integrations",
            "CMS Development",
            "Game Development",
            "AI / ML Development",
            "Cloud Solutions"
        ]
    }
    return jsonify(data)

@app.route('/api/services/uxui', methods=['GET'])
def get_uxui_data():
    data = {
        "title": "UX/UI",
        "services": [
            "Information Architecture (IA)",
            "Interaction Design (IxD)",
            "Sketching & Wireframes",
            "Prototyping and Testing",
            "Customer Personas",
            "Customer Interviews",
            "User Journeys",
            "Conversion Analysis"
        ]
    }
    return jsonify(data)

@app.route('/api/services/marketing', methods=['GET'])
def get_marketing_data():
    data = {
        "title": "Marketing",
        "services": [
            "Content Marketing",
            "Marketing Automation",
            "E-mail Marketing",
            "SMS Marketing",
            "SEO Organic Traffic",
            "Paid Search (PPC)",
            "Amazon Marketing",
            "CRM/CRO"
        ]
    }
    return jsonify(data)

