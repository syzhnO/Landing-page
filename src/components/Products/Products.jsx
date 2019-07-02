import React from 'react';
import ProductsNav from './ProductsNav';
import Item1 from './Item1';
import Item2 from './Item2';
import Item3 from './Item3.';
import Item4 from './Item4';
import Item5 from './Item5';
import {BrowserRouter, Route} from "react-router-dom";
function Products() {
    return(
        <BrowserRouter>
        
        
        <div className="block">
            <div className="container">
                <div className="product__text">
                <h1 className="title title_center">feature products</h1>
                <p className="subtitle subtitle_center">Lorem ipsum dolor sit amet, consectetur adipis cing elit,sed do eiusmod tempor incididunt ut labore et.</p>
                </div>
                <span className="after"></span>
                <ProductsNav />
                <div className="Product__content">
                    <Route path = '/item1' component={Item1}/>
                    <Route path = '/item2' component={Item2}/>
                    <Route path = '/item3' component={Item3}/>
                    <Route path = '/item4' component={Item4}/>
                    <Route path = '/item5' component={Item5}/>
                </div>
               
            </div>
        </div>

        </BrowserRouter>
    );
}

export default Products;