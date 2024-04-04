import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Dashboard,
  OrdersPage,
  ReportPage,
  CustomersPage,
  InventoryPage,
} from "./pages/index";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Orders" element={<OrdersPage />} />
          <Route path="/Report" element={<ReportPage />} />
          <Route path="/Customers" element={<CustomersPage />} />
          <Route path="/Inventory" element={<InventoryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
