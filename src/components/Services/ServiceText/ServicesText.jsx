import React from 'react';
import style from '../ServicesStyle.module.css';
function ServicesText() {
    return(
        <div className={style.Services__text}>
            <div className="title">
                do you know we can provide for you ?
            </div>
            <div className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ni ipsum dolor sit amet, consectetur adipis cing elit, ed doi eiusmod tempor incididunt ut labore et.
            </div>
            <input type="submit" className="button" value = "Learn More"/>
        </div>
    );
}

export default ServicesText;