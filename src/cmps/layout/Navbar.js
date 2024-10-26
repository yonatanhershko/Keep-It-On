import React from "react";
import { Link } from "react-router-dom";
import SignInLinks from "./SignInLinks";
import SignOutLinks from "./SignOutLinks";
const Navbar = () => {
    return (
        <nav className="navbar nav-warrper grey  draken-3">
            <div className="container">
                <Link to="/" className="brand-logo">
                    My Firebase App
                </Link>
                <SignInLinks />
                <SignOutLinks />
            </div>
        </nav>
    );
};

export default Navbar;
