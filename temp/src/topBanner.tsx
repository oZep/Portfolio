import React from 'react';

const TopBanner: React.FC = () => {
    return (
        <div className='h-full absolute w-full'>
            <div className="bg-blue-500 text-white py-4 top-0 sticky">
                <h1 className="text-3xl font-bold">Welcome to My Website</h1>
            </div>
        </div>
    );
};

export default TopBanner;
