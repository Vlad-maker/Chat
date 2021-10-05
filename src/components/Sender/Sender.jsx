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
            avatar: "https://hhcdn.ru/photo/607929075.jpeg?t=1633536207&h=v9SBBbbJ9Kg8TA3qsaEZWQ",
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
