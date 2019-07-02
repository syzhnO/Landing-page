import React from 'react';

function Tips(){
    return(
        <div className="block tips__block">
            <div className="container">
                <h1 className="title tips__title">
                    Design tips, tricks, and freebies. Delivered weekly.
                </h1>
                
                <p className="subtitle tips__subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod.
                </p>
                <form action="POST" className="tips__form">
                   <input type="email" placeholder="Email Address..." className="input tips__input"/>
                   <input type="submit" value="subscribe" className="button"/>
                </form>
            </div>
        </div>
    );
}
export default Tips;