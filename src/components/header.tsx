import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return(
    <div className="header">
      <h1>MaP app</h1>
      <h4 className="small-heading">Make a Plan</h4>
      <nav>
        <Link className="nav-links" to="/">Login</Link>
        <Link className="nav-links" to="/eventList">Event List</Link>
        <Link className="nav-links" to="/addEvents">Add Event</Link>
      </nav>
    </div>
  )
}

export default Header;