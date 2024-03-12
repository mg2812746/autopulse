from pydantic import BaseModel
from typing import Optional

class Orders(BaseModel):
    id: str
    date: str
    name: str
    shipTo: str
    amount: str


