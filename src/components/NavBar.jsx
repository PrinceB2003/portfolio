import React from 'react' 

function NavBar(){ 
    return ( 
            <header className="bg-[#070707] text-[#F9F4F4] text-xl flex justify-between pl-3 pr-3 pt-2" > 
                <h1 className="flex justify-start text-2xl">PortFolio</h1>   
                <div className="flex justify-end gap-2 text-xl"> 
                <a>Home</a> 
                <a href="#about">About</a>
                <a>Skills</a>
                <a>Projects</a> 
                <a>Contact</a>   
                </div>  
            </header>
    )
}


export default NavBar