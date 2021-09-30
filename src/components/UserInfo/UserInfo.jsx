import React from 'react';
import "./userinfo.css";

const UserInfo = () => {
    return (
        <div className="user-info">
            <div className="name">Chat by Vlad-maker</div>
            <div className="status">
                <span className="circle" />В сети
            </div>
        </div>
    )
}

export default UserInfo;
