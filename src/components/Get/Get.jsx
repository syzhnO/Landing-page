import React from 'react';
import GetForm from './GetForm';
import Contact from './Contact';

function Get(){
    return(
        <div className="block">
            <div className="container">
                <div className="get__text">
                    <h1 className="title">get in touch</h1>
                    <div className="subtitle">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et.ur adipis cing elit, sed do eiusmod tempor incididunt ut labore et. ur adipis cing elit, sed do eiusmod tempor incididunt ut labore et.</div>
                    <span className="after after_left"></span>
                </div>

                <div className="get__content">
                    <GetForm />
                    <Contact />
                </div>
                
            </div>
        </div>
    );
}

export default Get;