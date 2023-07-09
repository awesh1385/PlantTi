
import './App.css';
import { Sidebar } from "./components/sideBarSection/Sidebar";
import { Body } from "./components/bodySection/Body";
function App() {
  return(
    <div className="container">
      <Sidebar />
      <Body />
    </div>
  );
}

export default App;
