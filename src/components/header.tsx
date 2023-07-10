import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return(
    <div className="header">
      <h1>PI</h1>
      <h4 className="small-heading">Plan It</h4>
      <nav>
        <Link className="nav-links" to="/">Login</Link>
        <Link className="nav-links" to="/eventList">Event List</Link>
        <Link className="nav-links" to="/addEvents">Add Event</Link>
      </nav>
    </div>
  )
}

export default Header;