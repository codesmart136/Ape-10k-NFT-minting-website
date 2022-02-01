import React, { useState, useEffect } from "react";

function Header() {

    const [open, setOpen] = useState(false);

    

    return(
        <>
            <header>
                <a to="#"><img src="/assets/img/logo.png" alt="logo" /></a>
                <nav>
                    <ul>
                        <li>
                            <a href="#about">ABOUT</a>
                        </li>
                        <li>
                            <a href="#roadmap">ROADMAP</a>
                        </li>
                        <li>
                            <a href="#team">TEAM</a>
                        </li>
                        <li>
                            <a href="#faq">FAQ</a>
                        </li>
                    </ul>
                </nav>
                <div className={`${open?'open':''}`} onClick={(e)=>(e.stopPropagation(),setOpen(!open))}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </header>
            <menu className={`${open?'open':''}`} onClick={(e)=>setOpen(false)}>
                <ul>
                    <li>
                        <a href="#about">ABOUT</a>
                    </li>
                    <li>
                        <a href="#roadmap">ROADMAP</a>
                    </li>
                    <li>
                        <a href="#team">TEAM</a>
                    </li>
                    <li>
                        <a href="#faq">FAQ</a>
                    </li>
                </ul>
            </menu>
        </>
    )
}

export default Header