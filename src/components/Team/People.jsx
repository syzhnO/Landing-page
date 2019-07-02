import React from 'react';

function People() {
    return(
        <div className="people">
            <img className="avatar" src="https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"/>
           
            <div className="info">
                <div className="people__name">mark waugh</div>
                <div className="subtitle people__subtitle">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed dooing eiusmod tempor incididut labore Ui / Ux , print template.</div>
                <div className="social__nav">
                    <div className="social_link"><a href="#">Facebook</a></div>
                    <div className="social_link"><a href="#">Dribble</a></div>
                    <div className="social_link"><a href="#">Behance</a></div>
                    <div className="social_link"><a href="#">Twiter</a></div>

                </div>
                <div className="people__nav">
                    <a href="#"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg" alt="" className="people__link"/></a>
                    <a href="#"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg" alt="" className="people__link"/></a>
                    <a href="#"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg" alt="" className="people__link"/></a>
                    <a href="#"><img src="https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg" alt="" className="people__link"/></a>
                </div>
            </div>
        </div>
    );
}

export default People;
