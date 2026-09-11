import "./navbar.css"
function Navbar() {
  return (
    <div className="nav">
        <nav>
           <div id="navbar">
             <strong>Shape.</strong>
                <ul id="navlist">
                    <li className="item">Services</li>
                    <li className="item">Work</li>
                    <li className="item">About</li>
                    <li className="item">Blog</li>
                    <li className="item">Contact</li>
                </ul>
                <div className="btn">Start a Project</div>
           </div>
        </nav>
      

    </div>
  );
}

export default Navbar;