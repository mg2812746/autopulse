from pydantic import BaseModel
class Chart(BaseModel):
    time: str
    amount: str