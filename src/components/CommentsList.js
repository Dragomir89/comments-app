import React from 'react';
import Comment from './Comment';

export default ({ comments }) => {
    function renderComments (comments) {
        return comments.map((c, i) => {
            return <Comment content={c.content} date={c.date} id={i} key={i} />
        })
    }
    return (
        <div >
            <div>
                <h3>Comments</h3>
            </div>

            {renderComments(comments)}

        </div>
    )
};