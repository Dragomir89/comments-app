import React from 'react';

export default ({ content, date }) => {
    const style = {
        border: '1px solid #BABABA',
        borderRadius: '5px',
        padding: '5px',
        marginBottom: '5px'
    }
    return (
        <div>
            <div style={style}>
                <p>{content}</p>
                <p>Added on: {date.toLocaleString()}</p>
            </div>
        </div>
    )
};