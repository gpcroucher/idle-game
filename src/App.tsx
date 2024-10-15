import "./App.css";
import { Route, Routes } from "react-router-dom";
import Inventory from "./pages/Inventory.tsx";
import Map from "./pages/Map.tsx";
import NavBar from "./components/NavBar.tsx";

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
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/map" element={<Map />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
