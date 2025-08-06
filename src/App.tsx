import IntroPopup from "./components/IntroPopup";
import IntroWall from "./components/IntroWall";

function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <IntroPopup />
      <IntroWall />
    </div>
  );
}

export default App;