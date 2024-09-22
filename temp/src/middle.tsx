import React from 'react';

const Middle = () => {
    return (
        <div className='block w-[580px]'>
            <div className='pt-[80px] pb-[50px]'>
                <Intro />
                <Blurb />
                <Blurb />
                <Blurb />
                <Blurb />
                <Blurb />
            </div>
        </div>
    );
};

export default Middle;

const Blurb = () => {
    return (
        <div>
            <div className="widget rounded-md p-3 m-2">
                <h1 className="text-3xl font-bold">About Me</h1>
                <p className="">I am a software engineer with a focus on web development. I have experience with React, Node.js, and Python. I am also familiar with databases such as MySQL and MongoDB. I am currently looking for a job.</p>
            </div>
        </div>
    );
}

const Intro = () => {
    return (
        <div>
            <div className="widget rounded-md p-3 m-2">
                <div className="flex items-center">
                    <div>
                        <img src="https://avatars.githubusercontent.com/u/97713154?s=400&u=b79abb3c864bb50f7ee38b01634f32a6e4652894&v=4" alt="Profile" className="w-16 h-16 rounded-full mr-4" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">John Doe</h1>
                        <p className="text-sm">Software Engineer</p>
                    </div>
                </div>
                <p className="mt-4">
                    I am a passionate software engineer with a focus on web development. I have extensive experience with React, Node.js, and Python. I am also proficient with databases such as MySQL and MongoDB. Currently, I am seeking new opportunities to leverage my skills and contribute to exciting projects.
                </p>
            </div>
        </div>
    );
}