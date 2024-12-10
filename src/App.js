import logo from "./logo.svg";
import "./App.css";
import LoginAdmin from "./Pages/Login";
import SubAdminLogin from "./Pages/SubAdminLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StatsCards from "./Components/StatusCard";
import HomePage from "./Pages/HomePage";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginAdmin />} />
            <Route path="/subadmin" element={<SubAdminLogin />} />
            <Route path="/status" element={<StatsCards />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
