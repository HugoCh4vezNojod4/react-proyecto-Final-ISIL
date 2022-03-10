import React from 'react';
import "./Navbar.css";
import { BsSearch, BsList } from "react-icons/bs";
import foto1 from "../assets/logo-green-dark.png"

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={foto1} alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                        <a className="nav-link" href="/list">List</a>
                        <a className="nav-link" href="#">Portfolio</a>
                        <a className="nav-link" href="#">Elements</a>
                        <a className="nav-link" href="#">Blog</a>
                        <a className="nav-link" href="#">Shop</a>
                    </div>
                    <div className="navbar-nav mx-end">
                        <a href="#"><BsSearch className='icons'/></a>
                        <a href="#"><BsList className='icons'/></a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;