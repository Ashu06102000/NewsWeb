import "./App.css";
import News from "../src/Frontend/js/News";
import Navbar from "./Frontend/js/Navbar";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import fix from './Frontend/images/mode.jpg'
function App() {
  const [country, SetCountry] = useState("in");
  const [mode, setMode] = useState();
  const toggle = () => {
    if (mode === "black") {
      setMode("white");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("black");
      document.body.style.backgroundColor = "black";
    }
  };
  return (
    <>
      <div>
        <div onClick={toggle} style={{position:'fixed'}} className="mode">
          <img style={{width:'50px',marginTop:'120px'}} src={fix} alt="" />
        </div>
        <Navbar />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "10px",
            alignItems: "center"
            
          }}
          className="selector"
        >
          <p  style={{  color: 'rgb(0, 119, 255)', marginRight: "10px", textAlign: "center" ,fontFamily:' font-family: NeueHaasGroteskDisp Pro'}} >select your country </p>
          <select style={{height:'25px',width:'100px'}}
            value={country}
            onChange={(e) => {
              const SelectCountry = e.target.value;
              SetCountry(SelectCountry);
            }}
          >
            <option value="in">
            India
            </option>
            <option  value="us">
              United State
            </option>
            <option  value="jp">
              Japan
            </option>
            <option  value="gr">
              Germany
            </option>
            <option  value="fr">
              France
            </option>
          </select>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <News
                key="general"
                pageSize={100}
                category="general"
                country={country}
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                key="health"
                pageSize={100}
                category="health"
                country={country}
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                key="business"
                pageSize={100}
                category="business"
                country={country}
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                key="technology"
                pageSize={100}
                category="technology"
                country={country}
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                key="science"
                pageSize={100}
                category="science"
                country={country}
              />
            }
          />
          <Route
            path="/sports"
            element={<News key="sports" pageSize={100} category="sports" />}
          />
          <Route
            path="/entertainment"
            element={
              <News
                key="entertainment"
                pageSize={100}
                category="entertainment"
                country={country}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
