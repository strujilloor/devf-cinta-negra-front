import React from 'react';
import { Link } from 'react-router-dom';

const PostPreview = ({ _id, title, author }) => {
    return (
        <div>
            <div className="post-preview">
                <Link to={`post/${_id}`}>
                    <h2 className="post-title">
                        { title }
                    </h2>
                </Link>
                <p className="post-meta">
                    <Link to={`author/${author._id}`}>Posteado por :{author.first_name} </Link>
                </p>
            </div>
        </div>
    );
};

export default PostPreview;
