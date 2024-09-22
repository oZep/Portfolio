import React from 'react';
import { SiTypescript, SiTailwindcss, SiMui, SiVite } from 'react-icons/si';


const Left = () => {
    return (
        <div className="block w-[250px]">
            <div className='h-full'>
                <nav className="pt-[200px]">
                    <ul className="px-3 grid gird-col-1 gap-5">
                        <li>
                            <a href="#">
                                <button className='navbutton'>
                                    Home
                                </button>
                            </a>
                        </li>
                        <li>
                            <a href="#About">
                                <button className='navbutton'>
                                    About Me
                                </button>
                            </a>
                        </li>
                        <li>
                            <a href="#Experience">
                                <button className='navbutton'>
                                    Experience
                                </button>
                            </a>
                        </li>
                        <li><a href="#Project"><button className='navbutton'>Projects</button></a></li>
                        <li><a href="#Contacts"><button className='navbutton'>Contacts</button></a></li>
                    </ul>
                    <div className=''>
                        <div className='credits'>Created by Joey Issa</div>
                        <div>
                            <div className="flex justify-center flex-row gap-2">
                                <SiVite size={24} />
                                <SiTypescript size={24} />
                                <SiTailwindcss size={24} />
                                <SiMui size={24} />
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Left;