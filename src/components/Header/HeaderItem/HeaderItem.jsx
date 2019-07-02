import React from 'react';
import style from '../HeaderStyle.module.css';

function HeaderItem() {
    return(
        <div className={style.header__item}>
            <div className={style.text}>
                <div className={style.heading}>our strong organaisation</div>
                <div className="subtitle">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt  ut labore et. ectetur adig ipis cing elit, sed do eiusmod tempor incididunt.</div>
                <input type="submit" value="Contact Us" className="button"/>
            </div>
            <div className={style.video}>
            <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    );
}

export default HeaderItem;