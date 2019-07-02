import React from 'react';
import ServicesText from './ServiceText/ServicesText';
import ServicesType from './ServicesType/ServicesType';
import style from './ServicesStyle.module.css';



function Services() {
    return(
        <div className="block">
            <div className="container">
                <div className={style.services}>
                    <ServicesText />
                    <ServicesType />
                </div>
                
                
            </div>
        </div>
    );
}

export default Services;