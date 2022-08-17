import React from "react";
import retweet from '../../images/postsImg/icons8-retweet-24.png'
import arrow from '../../images/postsImg/arrow-up-from-bracket-solid.svg'
import heart from '../../images/postsImg/heart-regular.svg';
import comment from '../../images/postsImg/comment-regular.svg';
import angel from '../../images/postsImg/angle-down-solid.svg';
import checkMark from '../../images/postsImg/Checkmark.svg';

import './postStyle.css'

const Post = ({posts}) => {
    const {name, photo, nickname, content, image, date, comments, reposts, likes} = posts;

    return (
        <section>
            <div className="container">
                <div>
                    <img src={photo} alt={name} className="round-img"/>
                </div>
                <div className="right-side">
                    <div className="content-tittle">
                        <div>
                            <span className="author-name">{name}</span>

                            <img src={checkMark} alt='checkMark' className="icon-check"/>
                            <span className="author-date">{nickname} {date}</span>
                        </div>
                        <div className="author-angle-down">
                            <img src={angel} alt='angel-down' className="icon-angel"/>
                        </div>
                    </div>
                    <div className="content-main">
                        <p className="content-main-title">{content}</p>
                        <img src={image} alt='img' className="content-main-img"/>
                    </div>
                    <div className="content-footer-icons">
                        <div className="comment-icon">
                            <img src={comment} alt={comments} className="icon"/>
                            <span>{comments}</span>
                        </div>
                        <div className="repost-icon">
                            <img src={retweet} alt={reposts} className="icon"/>
                            <span>{reposts}</span>
                        </div>
                        <div className="like-icon">
                            <img src={heart} alt={likes} className="icon"/>
                            <span>{likes}</span>
                        </div>
                        <div className="share-icon">
                            <img src={arrow} alt='share' className="icon"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Post;
