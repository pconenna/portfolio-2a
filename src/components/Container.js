import React, { useState } from 'react';
import '../App.css';
import About from './About';
import Work from './Work';
import Nav from './Nav';
import Contact from './Contact';
function Container(){
    const [currentPage, setCurrentPage] = useState('About');
    const renderPage = () =>{
        if (currentPage === "About"){
            return <About/>
        }
        if (currentPage === "Work"){
            return <Work/>
        }
        if (currentPage === "Contact"){
            return <Contact/>
        }
        
        // add more to this after i add more components
    }

    const handlePageChange = (page) => setCurrentPage(page);
    return(
        <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
        </div>
    )
}

export default Container; 