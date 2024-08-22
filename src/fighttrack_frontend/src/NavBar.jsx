import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <>
            <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <Link class="navbar-item" to="/">
                        <h1>Journal</h1>
                    </Link>
                    <Link role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </Link>
                </div>
                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                        <Link class="navbar-item" to="/">Home</Link>
                        <Link class="navbar-item" to="/category">Select Category</Link>
                        <Link class="navbar-item" to="/entry/new">New Entry</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar