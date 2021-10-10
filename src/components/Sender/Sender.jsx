import React, { useState } from 'react';
import PropTypes from "prop-types";
import "./sender.css"

const Sender = ({onAddMessage}) => {
    const [ value, setValue ] = useState("");

    const onChange = (event) => setValue(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();

        onAddMessage({
            id: Date.now(),
            avatar: "https://scontent-arn2-1.xx.fbcdn.net/v/t1.18169-9/13770392_1194953457213863_7404529362049618726_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=r4bSy0SJfHQAX_Merln&_nc_ht=scontent-arn2-1.xx&oh=54d47e22c443517580d4db010689f28d&oe=618A4522",
            message: value,
            date: new Date().toISOString(),
            is: "my",
            status: "sended",
        });
        setValue("");
    };

    return (
        <form className="sender" onSubmit={onSubmit}>
            <input
                placeholder="Введите сообщение"
                value={value}
                onChange={onChange}
                required
                />
            <button>Отправить</button>
        </form>
    );
};

Sender.propTypes = {
    onAddMessage: PropTypes.func.isRequired,
}

export default Sender;
