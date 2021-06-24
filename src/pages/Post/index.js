import React from 'react';
import { useLocation } from 'react-router-dom';
import PostStyles from '../../styles/PostStyles';

const Post = (props) => {
    const location = useLocation();
    const { title, url, author } = (location && location.state) || {};    

    return (
        <PostStyles data-testid="location-display">
            <p style={{display: "none"}}>{location.pathname}</p>        
            <p className="title">{title}</p>            
            <img src={url} alt={title}/>
            <p className="author">Author: {author}</p>
        </PostStyles>
    );
};

export default Post;