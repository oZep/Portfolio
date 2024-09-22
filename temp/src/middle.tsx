import React from 'react';

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

const Middle = () => {
    return (
        <div className='block w-[580px]'>
            <div className='pt-[80px] pb-[50px]'>
                <Blurb />
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