import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Tenant from "./Pages/Tenants/Tenant";
import Property from "./Pages/Property/Property";
import Issues from "./Pages/Issues/Issues";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tenant" element={<Tenant />} />
        <Route path="/property" element={<Property/>} />
        <Route path="/issues" element={<Issues/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
