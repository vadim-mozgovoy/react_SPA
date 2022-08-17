import React from "react";
import {Component} from "react";
import Header from "../Header/Header";
import './homeStyle.css'
import backgroundImg from '../../images/home_page.jpeg'
import Footer from "../Footer/footer";

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <div>
                    <Header/>
                </div>
                    <div className="home_container">
                        <div className="home-intro">
                            <img src={backgroundImg} alt="img"/>
                            <div className="box d-flex flex-column justify-content-center ">
                                <h1 className="card-title text-white align-self-center">React Single Page Application</h1>
                                <h5 className="card-text text-white align-self-center mt-3">IT-індустрія України принесла $3,2 млрд за перші п’ять місяців. Це єдина галузь бізнесу, що зросла у 2022 році</h5>
                                <p className="card-text text-white align-self-center">IT-сектор України за перші п’ять місяців (січень-травень 2022 року) забезпечив експортних надходжень на суму $3,2 млрд — на 27% більше за аналогічний період 2021 року. Власне, IT — єдина галузь бізнесу, що зросла у 2022 році, повідомляє OpenDataBot із посиланням на дані Національного банку.</p>
                            </div>
                        </div>
                    </div>
                   <div>
                       <Footer/>
                   </div>
        </div>);
    }
}
