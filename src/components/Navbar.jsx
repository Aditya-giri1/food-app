import { useState } from "react";
import { Link } from "react-router-dom";
function Navbaar(){
  const[loginbtn,setloginbtn] = useState("Login");
  return (
    <div id='navbar'>
      <img id='logo' src="https://imgs.search.brave.com/ycg7doCjTnUso93jKruh55k1T75ZBxa69AcPcfxibl4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tdmVj/dG9yL2ZyZXNoLWZv/b2QtbG9nby1oZWFs/dGh5LXRlbXBsYXRl/LXdpdGgtc3Bvb25z/LWZvcmtzLWdyZWVu/LWxlYXZlc18xMjYy/NTQyLTIyNzU5OS5q/cGc_c2VtdD1haXNf/dGVzdF9iJnc9NzQw/JnE9ODA" alt="our logo" />
      <ul id='loginsignup'>
        <li><Link to={"/"}>Home </Link></li>
        <li><Link to={"/About"}>About us up </Link></li>
        <li><Link to={"/Contact"}>Contanc us</Link></li>
        <li><Link to={"/Cart"}>Cart</Link></li>
        
      </ul>
      <button id="loginbtn" onClick={()=>{
        loginbtn === "Login"? setloginbtn("LogOut"): setloginbtn("Login")
      }}>{loginbtn}</button>
        
      
    </div>
  )
}
export default Navbaar;