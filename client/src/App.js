import './App.css';
import Home from "./pages/Home"
import Add from "./pages/Add"
import Edit from "./pages/Edit"
import Error from "./pages/Error"
import {Routes,Route, Link} from "react-router-dom"
import Nvbr from './components/Nvbr';

function App() {
  return (
    <div className="App">
      <Nvbr />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/add" element={<Add/>} />
      <Route path="/edit/:id" element={<Edit/>} />
      <Route path="*" element={<Error/>} />
    </Routes>
    </div>
  );
}

export default App;
