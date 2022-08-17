import React from "react";
import {PostPerson} from "../../constants/const_posts";
import Post from "../Posts/Post";
import Header from "../Header/Header";
import Footer from "../Footer/footer";





function PostsPage() {
    return (
        <div>
            <div>
                <Header/>
            </div>
                        <div className="posts">
                            {PostPerson.map((post, index) => {
                                return <Post posts={post} key={index}/>
                            })}
                        </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default PostsPage;
