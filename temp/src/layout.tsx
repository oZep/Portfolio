import React from "react";
import Background from "./background";
import Columns from "./columns";
import TopBanner from "./topBanner";

const Layout = ({ children }) => {
    return (
        <>
        <div className="w-screen">
            <Background />
            {children}
        </div>
        <Columns />
        </>
    );
}

export default Layout;