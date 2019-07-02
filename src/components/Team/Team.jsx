import React from 'react';
import People from './People'


const Team = (props) => {
   
    return(
        <div className="block">
            <div className="container">
                <div className="team">
                    <div className="get__text team__text">
                        <div className="title">Meet our team</div>
                        <div className="subtitle">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed dooing eiusmod tempor incididut labore Ui / Ux , print template.</div>
                        <span className="after after_left"></span>
                    </div>
                    <People/>
                
                </div>
            </div>
        </div>
    );
}

export default Team;