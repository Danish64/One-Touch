import React from 'react';
import styles from './PostCards.module.css';
import PostCard from '../PostCard/PostCard';

const PostCards = (props) => {
    return (
        <div>
            <PostCard cardType="Facebook"/>
            <PostCard cardType="Twitter"/>
            <PostCard cardType="Instagram"/>
            <PostCard cardType="LinkedIn"/>
        </div>
    );
};

export default PostCards;