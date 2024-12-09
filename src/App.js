import logo from "./logo.svg";
import "./App.css";
import LoginAdmin from "./Pages/Login";
import SubAdminLogin from "./Pages/SubAdminLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index path="/" element={<HomePage/>} />
            <Route  path="/login" element={<LoginAdmin/>} />
            <Route  path="/subadmin" element={<SubAdminLogin/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
