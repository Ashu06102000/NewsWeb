import "./App.css";
import News from "../src/Frontend/js/News";
import Navbar from "./Frontend/js/Navbar";
import {Route,Routes} from 'react-router-dom'

function App() {
  
  return (
    <>
    <div>
      <Navbar/>
      <Routes>
    <Route path="/" element={<News key="general" category="general" country="in" />} />
    <Route path="/health"  element={<News key="health" category="health" country="in"  />} />
    <Route path="/business" element={<News key="business" category="business" country="in" />} />
    <Route path="/technology" element={<News key="technology" category="technology" country="in" />} />
    <Route path="/science" element={<News key="science" category="science" country="in" />} />
    <Route path="/sports" element={<News key="sports" category="sports"  />} />
    <Route path="/entertainment" element={<News key="entertainment" category="entertainment" country="in" />} />
    </Routes>
    </div>
    
    </>
  );
}

export default App;
