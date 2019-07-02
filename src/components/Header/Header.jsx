import React from 'react';

import style from './HeaderStyle.module.css';
import Nav from './Nav/Nav';
import HeaderItem from './HeaderItem/HeaderItem'


function Header() {
   return(
      <div className={style.block}>
         <div className="container">
            <Nav />
            <HeaderItem />
            
         </div>
      </div>
      
      
      
   )
}

export default Header;