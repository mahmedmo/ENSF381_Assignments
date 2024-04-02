# // <!-- 
# // ======================================================================
# // Assignment: ENSF 381 -Assignment 5
# // Created By Muhammad Ahmed UCID: 10190776, Petr Dubovsky UCID: 30171229
# // Submission: Tue Apr 2, 2024
# // ======================================================================
# // -->

from flask import Flask, request, jsonify
from flask_cors import CORS 
app = Flask(__name__)
CORS(app)
users = []
products = [
{
"id": 1,
"name": "Product 1",
"description": "Description for Product 1",
"price": 10.99,
"image": 'images/product1.png'
},
{
"id": 2,
"name": "Product 2",
"description": "Description for Product 2",
"price": 20.99,
"image": 'images/product2.jpg'
},
{
"id": 3,
"name": "Product 3",
"description": "Description for Product 3",
"price": 10.99,
"image": 'images/product3.jpg'
},
{
"id": 4,
"name": "Product 4",
"description": "Description for Product 4",
"price": 10.99,
"image": 'images/product4.jpg'
},
{
"id": 5,
"name": "Product 5",
"description": "Description for Product 5",
"price": 10.99,
"image": 'images/product5.jpg'
},
{
"id": 6,
"name": "Product 6",
"description": "Description for Product 6",
"price": 10.99,
"image": 'images/product6.jpg'
},
{
"id": 7,
"name": "Product 7",
"description": "Description for Product 7",
"price": 10.99,
"image": 'images/product7.jpg'
},
{
"id": 8,
"name": "Product 8",
"description": "Description for Product 8",
"price": 10.99,
"image": 'images/product8.jpg'
},
{
"id": 9,"name": "Product 9",
"description": "Description for Product 9",
"price": 10.99,
"image": 'images/product9.jpg'
},
{
"id": 10,
"name": "Product 10",
"description": "Description for Product 10",
"price": 10.99,
"image": 'images/product10.jpg'
}
]

@app.route('/createAccount', methods=['POST'])
def signup():
    data = request.json
    new_username = data.get('username')
    
    for user in users:
        if user['username'] == new_username:
            return jsonify({'message': 'Username already exists'}), 400

    user = {
        'username': new_username,
        'password': data.get('password'),
        'email': data.get('email')
    }
    users.append(user)

    return jsonify({'message': 'User signed up successfully.'}), 201
    

@app.route('/authAccount', methods=['POST'])
def login():
    data = request.json
    entered_username = data.get('username')
    entered_password = data.get('password')

    for user in users:
        if user['username'] == entered_username and user['password'] == entered_password:
            return jsonify({'message': 'Login successful'}), 200

    return jsonify({'message': 'Invalid username or password'}), 401

@app.route('/products', methods=['GET'])
def get_products():
    return jsonify(products)

@app.route('/users', methods=['GET'])
def get_users():
    return jsonify(users)
if __name__ == '__main__':
    app.run(debug=True)