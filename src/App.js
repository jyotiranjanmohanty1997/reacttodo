import { HashRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Navheader from "./header";
import Basic from "./basic";
import Viewall from "./viewall";
function App() {
  return (
      <HashRouter>
      <Navheader/>
        <Routes>
          <Route exact path="/AddTask" element={<Basic/>}/>
          <Route exact path="/ViewTask" element={<Viewall/>}/>
        </Routes>
      </HashRouter>
  );
}

export default App;
