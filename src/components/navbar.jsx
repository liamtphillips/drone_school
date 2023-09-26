import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';

const navItemsInfo = [
    { name: "Home", type: "link", href: "/" },
    { name: "Planets", href: "/table" },
    { name: "Daily Photo", type: "link", href: "/nasapic" },
 
]

const Navbar = () => {
    const [navIsVisible, setNavIsVisible] = useState(false);
    const navVisibilityHandler = () => {
        setNavIsVisible((curState) => {
            return !curState;
        });
    };
    
    return (
        <section>
            <header className='text-white mx-auto px-4 flex justify-between py-4 items-center'>
                <div>
                    <Link to="/" className="font-mono text-xl tracking-widest font-bold">
                        Solar System
                    </Link>
                </div>
                <div className="lg:hidden z-[50]">
                    {navIsVisible ? (
                        <AiOutlineClose className="w-6 h-6 text-black" onClick={navVisibilityHandler} />
                    ) : (
                        <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler} />
                    )}
                </div>
                <div className={`${navIsVisible ? "right-0" : "-right-full"} 
                transition-all duration-300 lg:mt-0 bg-yellow-300 lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 -right-full lg:static gap-x-9 items-center`}>
                    <ul className='flex flex-col lg:flex-row items-center gap-y-5 lg:text-black gap-x-8 font-semibold'>
                        {navItemsInfo.map((item) => (
                            <li key={item.name} className='cursor-pointer font-mono text-5xl text-black border-b border-black border-2 p-5 rounded-xl lg:border-none lg:text-lg  lg:text-white lg:p-0 '>
                                <Link to={item.href}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </header>
        </section>
    )
}

export default Navbar;
