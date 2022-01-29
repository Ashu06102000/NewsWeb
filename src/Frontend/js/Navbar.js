import React,{useState} from "react";
import '../CSS/Navbar.css';
import { Link } from "react-router-dom";
import menu from '../images/menu.png'

function Navbar() {
  const [bar , setBar] = useState(false);
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <h1>News</h1>
        </div>
        <ul className={bar ? " menuUl Mobile-menuUl" : "menuUl"}>
          <li>
            <Link onClick={()=> setBar(false)} className="links_bar" to="/">
              general
            </Link>
          </li>
          <li>
            <Link onClick={()=> setBar(false)} className="links_bar" to="/health">
              health
            </Link>
          </li>
          <li>
            <Link onClick={()=> setBar(false)} className="links_bar" to="/entertainment">
              entertainment
            </Link>
          </li>
          <li>
            <Link onClick={()=> setBar(false)} className="links_bar" to="/sports">
              sports
            </Link>
          </li>
          <li>
            <Link onClick={()=> setBar(false)} className="links_bar" to="/science">
              science
            </Link>
          </li>
          <li>
            <Link onClick={()=> setBar(false)} className="links_bar" to="/business">
              business
            </Link>
          </li>
          <li>
            <Link onClick={()=> setBar(false)} className="links_bar" to="/technology">
              technology
            </Link>
          </li>
        </ul>
        <div className="menus" onClick={()=> setBar(!bar)}>
          <img src={menu} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
