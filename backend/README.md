# backend

Here we will use FastAPI to quickly draft up endpoints of our server-side app. 

## Getting Started

Installing dependencies
### `pip install fastapi`
### `pip install "uvicorn[standard]"`
Run the server with
### `uvicorn main:app --reload`

Check it with 
http://127.0.0.1:8000/items/5?q=somequery

Interactive docs at 
http://127.0.0.1:8000/docs

Alternative docs at 
http://127.0.0.1:8000/redoc