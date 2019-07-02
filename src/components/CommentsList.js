import React from 'react';
import Comment from './Comment';

export default ({ comments }) => {
    function renderComments (comments) {
        return comments.map((c) => {
            return <Comment content={c.content} date={c.date} id={c._id} key={c._id} />
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