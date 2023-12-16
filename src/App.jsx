import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Cursor from "./Components/Cursor";

function App() {
  return (
    <div className="App min-h-screen bg-bblack">
      <Cursor />
      <Navbar />
      <Home />
    </div>
  );
}

export default App;