import { Link } from 'react-router-dom'

import './common.css'

function Nav() {
  return (
    <div className="Nav">
    <ul className="nav-links">
  <li className="url"><Link to="/">Todo</Link></li>
  <li className="url"><Link to="/random">random</Link></li>
  
  
</ul>
  
    </div>
  );
}

export default Nav;
