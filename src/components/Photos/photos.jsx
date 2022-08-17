import React from "react";
import {photos} from "../../constants/const_photos";
import Header from "../Header/Header";
import Footer from "../Footer/footer";
import './photosStyle.css'


function PhotosPage() {
    return (
        <div>
            <div>
                <Header/>
            </div>
            <div className="photos">
                {photos.map((photo, index) => {
                    return <img src={photo.img} key={index} alt={`img${index}`}/>
                })}
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default PhotosPage;
