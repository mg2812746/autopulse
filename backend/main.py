from fastapi import FastAPI, HTTPException, Body
from pydantic import BaseModel
from pymongo import MongoClient
from bson import ObjectId
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Dict
from models.chart import Chart

'''
    FastAPI Instantiation and Middleware Configuration
'''
app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://192.168.56.1:3000", "http://localhost:3000"],  # Update with your React frontend URL
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT"],
    allow_headers=["*"],
)

'''
    Dummy Database Data
'''
dummy_chart_data = [
    {"time": "00:00", "amount": "0"},
    {"time": "03:00", "amount": "300"},
    {"time": "06:00", "amount": "600"},
    {"time": "09:00", "amount": "800"},
    {"time": "12:00", "amount": "1500"},
    {"time": "15:00", "amount": "2000"},
    {"time": "18:00", "amount": "2400"},
    {"time": "21:00", "amount": "2400"},
]
dummy_orders = [#id, date, name, quantity, amount 
    {"id": "0",
    "date": '16 Mar, 2019',
    "name": 'Product A',
    "quantity": "1",
    "amount": "312.44",},
    {"id": "1",
    "date": '16 Mar, 2019',
    "name": 'Product B',
    "quantity": "1",
    "amount": "312.44",},
    {"id": "2",
    "date": '16 Mar, 2019',
    "name": 'Product C',
    "quantity": "1",
    "amount": "312.44",},
]

'''
    Routes
'''
# return chart revenue data
@app.get("/get-chart-data", response_model=List[Dict[str, str]])
async def chart_data():
    return dummy_chart_data

# add chart revenue data
@app.post("/add-chart-data")
async def create_chart_data(chart: Chart):
    chart_dict = chart.dict()
    if chart_dict not in dummy_chart_data:
        return chart_dict

# return orders data
@app.get("/get-orders", response_model=List[Dict[str, str]])
async def orders():
    return dummy_orders

# return orders data
@app.get("/get-customers", response_model=List[Dict[str, str]])
async def customers():
    return dummy_orders
