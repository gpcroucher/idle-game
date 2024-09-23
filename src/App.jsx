import "./App.css";
import { Route, Routes } from "react-router-dom";
import Inventory from "./pages/Inventory.jsx";
import Junkheap from "./pages/Junkheap.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <>
      <div className="window-container">
        <div className="window">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <NavBar exclude="/" />
                  <p>You are looking at my root route...</p>{" "}
                </>
              }
            />
            <Route path="/junkheap" element={<Junkheap />} />
            <Route path="/inventory" element={<Inventory />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
