import React, { Component } from 'react';
import styles from './PostCard.module.css';

class PostCard extends Component {
    render() {
        return (
            <div>
                <p>{this.props.cardType}</p>
            </div>
        );
    }
}

export default PostCard;