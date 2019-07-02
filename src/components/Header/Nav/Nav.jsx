import React from 'react';
import style from './NavStyle.module.css';

function Nav() {
    return(
        <div className={style.nav}>
            
                <div className={style.nav__items}>
                    <div className={style.nav__item}><a href="#">home</a></div>
                    <div className={style.nav__item}><a href="#">portfolio</a></div>
                    <div className={style.nav__item}><a href="#">about us</a></div>
                    <div className={style.nav__item}><a href="#">contact</a></div>
                </div>
            </div>
            
       
    )
}
export default Nav;