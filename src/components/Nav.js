import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <ul className="block--nav">
            <li className="mv-item"><Link to="/">QCM</Link></li>
            <li className="mv-item"><Link to="/add">Ajouter une question</Link></li>
        </ul>
    )
}

export default Nav;