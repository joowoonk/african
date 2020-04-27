# BackEnd-Map

Guidelines: "Make sure with all Post and Put Requests that you recreate
             the input id exactly as it is set up in the representation.The input body can be different, but IE This --> "name": "Here" has to be exact but "name": "Here" <-- Can be anything as long it is the same type of data (String/Integer)."

base URL: ""

## Login/Register

- Register POST REQUEST
    URL: ""

    {
        "username": "Here", <-- String
        "password": "Here", <-- String
        "name": "Here" <-- String
    }

- Login POST REQUEST
    Requirements: Login requires a Register first.

    URL: ""

    {
        "username": "Here",
        "password": "Here"
    }

## User Endpoints

- User GET REQUEST
    URL: ""

    Visual Representation
    {
        "id": 123,
        "username": "Here",
        "password": "Here",
        "name": "Here"
    }

- User ID GET REQUEST
    URL: "" <-- Requires ID

- User PUT REQUEST
    URL: "" <-- Requires ID

    {
        "username": "Here",
        "password": "Here",
        "name": "Here"
    }

- User DELETE REQUEST
    URL: "" <-- Requires ID

    Visual Representation
    {
        "message": "User Removed"
    }

## Marketplace Items Endpoints

- Items GET REQUEST
    URL: ""

    Visual Representation
    {
        "id": 123,
        "name": "Here",
        "price": "0.00$",
        "category": "Appliance",
        "location": "Nigeria",
        "users_id": 123,
        "owner": "Here"
    }

- Items ID GET REQUEST
    URL: "" <-- Requires ID

- Items POST REQUEST
    URL:""

    Visual Representation
    {
        "name": "Here", <-- String  
        "price": "0.00$", <-- String
        "category": "Here", <-- String
        "location": "Here", <-- String
        "users_id": 123 <-- Integer
    }

- Items PUT REQUEST
    URL: "" <-- Requires ID

    Visual Representation
    {
        "name": "Here", <-- String  
        "price": "0.00$", <-- String
        "category": "Here", <-- String
        "location": "Here", <-- String
        "users_id": 123 <-- Integer
    }

- Items DELETE REQUEST
    URL: "" <-- Requires ID

    Visual Representation
    {
        "message": "Item Removed From Market"
    }