import { Routes, Route, Outlet, Link } from "react-router-dom";
// import "./App.css";
import "./index.css"
import Product from "./product";

function App() {
  return (
    <div className="w-full h-screen">
      <Routes>
        <Route path="/" element={<Product />} />

      </Routes>
    </div>
  );
}

export default App;
