import React from 'react';
import HeroArea from './HeroArea/HeroArea';
import PostCards from './MainContent/Posts/PostCards/PostCards';
import PostCard from './MainContent/Posts/PostCard/PostCard';

const Home = () => {
    return (
        <React.Fragment>
            <HeroArea />
            <PostCards />
        </React.Fragment>
    );
};

export default Home;