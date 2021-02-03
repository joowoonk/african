# BackEnd-Map

Guidelines: "Make sure with all Post and Put Requests that you recreate the input id exactly as it is set up in the representation. The input body can be different, but IE This --> "name": "Here" has to be exact but "name": "Here" <-- Can be anything as long it is the same type of data (String/Integer)."

base URL: "https://africanmarket-jk.herokuapp.com"

## Login/Register

1. Register POST REQUEST
    - URL: "/api/auth/register"
    
    - Visual Representation: 
    {
        "username": "Here", <-- String
        "password": "Here", <-- String
        "name": "Here" <-- String
    }

2. Login POST REQUEST
    - Requirements: Login requires a Register first.

    - URL: "/api/auth/login"
    
    - Visual Representation: 
    {
        "username": "Here",
        "password": "Here"
    }

## User Endpoints

1. User GET REQUEST
    - URL: "/api/market/users"

    - Visual Representation: 
    {
        "id": 123,
        "username": "Here",
        "password": "Here",
        "name": "Here"
    }

2. User ID GET REQUEST
    - URL: "/api/market/users/:id" <-- Requires ID

3. User PUT REQUEST
    - URL: "/api/market/users/:id" <-- Requires ID
    
    - Visual Representation: 
    {
        "username": "Here",
        "password": "Here",
        "name": "Here"
    }

4. User DELETE REQUEST
    - URL: "/api/market/users/:id" <-- Requires ID

    - Visual Representation: 
    {
        "message": "User Removed"
    }

## Marketplace Items Endpoints

1. Items GET REQUEST
    - URL: "/api/market/items"

    - Visual Representation: 
    {
        "id": 123,
        "name": "Here",
        "price": "0.00$",
        "category": "Appliance",
        "location": "Nigeria",
        "users_id": 123,
        "owner": "Here"
    }

2. Items ID GET REQUEST
    - URL: "/api/market/items/:id" <-- Requires ID

3. Items POST REQUEST
    - URL:"/api/market/items"

    - Visual Representation: 
    {
        "name": "Here", <-- String
        "price": "0.00$", <-- String
        "category": "Here", <-- String
        "location": "Here", <-- String
        "users_id": 123 <-- Integer
    }

4. Items PUT REQUEST
    - URL: "/api/market/items/:id" <-- Requires ID

    - Visual Representation: 
    {
        "name": "Here", <-- String  
        "price": "0.00$", <-- String
        "category": "Here", <-- String
        "location": "Here", <-- String
        "users_id": 123 <-- Integer
    }

5. Items DELETE REQUEST
    - URL: "/api/market/items/:id" <-- Requires ID

    - Visual Representation: 
    {
        "message": "Item Removed From Market"
    }
