import Foundry from "../rooms/Foundry";
import Junkheap from "../rooms/Junkheap";
import NavBar from "../components/NavBar";

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
