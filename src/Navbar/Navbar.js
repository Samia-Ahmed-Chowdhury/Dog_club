import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../images/logo.png"
import { NavLink } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
    const [show, setShow] = useState(false)

    return (
        <>
            <nav className="navbar navbar-expand-lg py-3">
                <div className="container">
                    <div className="logo">
                        <NavLink to="/" >
                            <img src={logo} alt="logo" className=" img-fluid" /></NavLink>
                    </div>
                    <div className='hidden_search'>
                       <SearchIcon /> 
                    </div>
                    <button className="navbar-toggler" type="button" id="navbar-toggler">
                        <label>
                            <input className="toggle_btn" type="checkbox" id="toggle_btn" onClick={() => setShow(!show)} />
                            <div className="toggle">
                                <span className="top_line common"></span>
                                <span className="mid_line common"></span>
                                <span className="end_line common"></span>
                            </div>
                        </label>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto ">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="blogs" >Blogs</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <form className="search_form d-flex">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                            <button className="nav_btn" type="submit"><SearchIcon /></button>
                        </form>
                    </div>
                </div>


                {/* /* <!-- ---------mbl nav-------------- --> */}

                {
                    show ? <div className="slide" id="slide">
                        <ul className="navbar-nav  me-auto mb-lg-0 m-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/Home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/blogs">Blogs</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>

                        </ul>
                    </div>
                        : null
                }
            </nav>

        </>
    )
}



export default Navbar