import React from "react";

function Nav({ currentPage, handlePageChange }){
    return(
        <nav className="navbar navbar-expand-lg ">
            <a href='#about' onClick={() => handlePageChange("About")}> About Me</a>
            <a href="https://github.com/pconenna" target="_blank" rel="noreferrer">Github</a>
            <a href="#my-work" onClick={() => handlePageChange("Work")}>Work</a>
            <a href="#contact" onClick={() => handlePageChange("Contact")}>Contact Me</a>
        </nav>
    )
}
export default Nav;