import React from 'react'
import UserInfo from "../UserInfo/UserInfo";
import Theme from "./Theme/Theme"
import "./header.css";

const Header = () => {
    return (
        <div className="header">
            <UserInfo />
            <Theme />            
        </div>
    )
};

export default Header;
