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
            <div className="widget rounded-md p-5 m-2">
                <h1 className="text-3xl font-bold">About Me</h1>
                <p className="">I am a software engineer with a focus on web development. I have experience with React, Node.js, and Python. I am also familiar with databases such as MySQL and MongoDB. I am currently looking for a job.</p>
            </div>
        </div>
    );
}

const Intro = () => {
    return (
        <div>
            <div className="widget rounded-md p-5 m-2 text-white">
                {/* Profile Section */}
                <div className="flex items-center float-start mr-4">
                    <img 
                        src="https://avatars.githubusercontent.com/u/97713154?s=400&u=b79abb3c864bb50f7ee38b01634f32a6e4652894&v=4" 
                        alt="Profile" 
                        className="w-16 h-16 rounded-full mr-4" 
                    />
                    <div>
                        <h1 className="text-3xl font-bold">Joey Issa</h1>
                        <p className="text-sm">Software Developer</p>
                    </div>
                </div>

                {/* GitHub Trophies */}
                <div className="m-1 pl-4 flex justify-center border-l-2 border-gray-500">
                    <a href="https://github.com/ryo-ma/github-profile-trophy" target="_blank" rel="noopener noreferrer">
                        <img 
                            src="https://github-profile-trophy.vercel.app/?username=ozep&row=2&column=4&theme=darkhub&no-frame=true&title=Commits,PullRequest,Repositories,Followers" 
                            alt="GitHub trophies" 
                        />
                    </a>
                </div>

                {/* Snake Contribution Animation */}
                <div className="mt-4 flex justify-center">
                    <img 
                        src="https://raw.githubusercontent.com/oZep/oZep/output/snake.svg" 
                        alt="Snake animation" 
                    />
                </div>
            </div>
        </div>
    );
};
