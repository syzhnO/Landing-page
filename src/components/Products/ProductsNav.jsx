import React from 'react';
import {NavLink} from "react-router-dom";

function ProductsNav(){
    return(
        <div className="products__nav">
            <div className="link">
                <NavLink to="/item1">All</NavLink>
            </div>
            <div className="link">
                <NavLink to="/item2">print template</NavLink>
            </div>
            <div className="link">
                <NavLink to="/item3">web template</NavLink>
            </div>
            <div className="link">
                <NavLink to="/item4">user interface</NavLink>
            </div>
            <div className="link">
                <NavLink to="/item5">mock-up</NavLink>
            </div>
        </div>
    );
}
export default ProductsNav;