import React from 'react';
import "./Style_nav.css"

const Navbar = () => {
    return (
        <>
            <ul>
                <li>
                    <a href={"/"}>Home</a>
                </li>
                <li>
                    <a href={"./Owner"}>Owner</a>
                </li>
            </ul>
            <hr />
        </>
    );
};

export default Navbar;