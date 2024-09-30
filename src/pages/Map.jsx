import Foundry from "../rooms/Foundry.jsx";
import Junkheap from "../rooms/Junkheap.jsx";
import NavBar from "../components/NavBar.jsx";

import "./Map.css";

export default function Map() {
  return (
    <>
      <NavBar exclude="/map" />
      <div className="room-container">
        <Junkheap />
        <Foundry />
      </div>
    </>
  );
}
