import React from 'react';
import Item from './Item/Item';
import { normalizeDialog } from './Item/helpers';
import data from '../../data';
import './dialog.css';

const Dialog = () => {
    const normalizedDialog = normalizeDialog(data);

    return (
        <div className="dialog">
            <div className="overflow">
                {normalizedDialog.map((item) => (
                    <Item {...item} key={item.id} />
                ))}
            </div>
        </div>
    );
};

export default Dialog;
