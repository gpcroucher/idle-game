import Foundry from "../rooms/Foundry";
import Junkheap from "../rooms/Junkheap";
import NavBar from "../components/NavBar";

export default function Map() {
  return (
    <>
      <NavBar exclude="/map" />
      <div className="grid grid-cols-4">
        <Junkheap />
        <Foundry />
      </div>
    </>
  );
}
