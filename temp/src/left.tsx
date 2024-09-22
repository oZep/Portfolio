import React from 'react';

const Left = () => {
    return (
        <div className="block w-[250px]">
            <div className='h-full'>
                <nav className="pt-[200px]">
                    <ul className="mr-3 grid gird-col-1 gap-5">
                        <li>
                            <div className='navimage'></div>
                            <a href="#">
                                <button className='navbutton'>
                                    Home
                                </button>
                            </a>
                        </li>
                        <li>
                        <div className='navimage'></div>
                            <a href="#About">
                                <button className='navbutton'>
                                    About Me
                                </button>
                            </a>
                        </li>
                        <li>
                        <div className='navimage'></div>
                            <a href="#Experience">
                                <button className='navbutton'>
                                    Experience
                                </button>
                            </a>
                        </li>
                        <li><div className='navimage'></div><a href="#Project"><button className='navbutton'>Projects</button></a></li>
                        <li><div className='navimage'></div><a href="#Contacts"><button className='navbutton'>Contacts</button></a></li>
                    </ul>
                    <div className='className="mr-3 grid gird-col-1 gap-5"'>
                        <div className='animatebutton'>✦ . 　⁺ 　 . ✦ . 　⁺ 　 . ✦</div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Left;