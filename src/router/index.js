import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetail from "../view/ProductDetails"
import Search from "../view/Search"
import Home from "../view/Home"
import ExploreProduct from "../view/ExploreProduct"


function index() {
    return (
        <div>
            <Router>
                <Switch>
                <Route
            key={1}
            exact={true}
            path={`/product-detail`}
            render={(props) => <ProductDetail {...props} />}
          />
          
                </Switch>
                <Switch>
                <Route
            key={1}
            exact={true}
            path={`/home`}
            render={(props) => <Home {...props} />}
          />
          
                </Switch>
                <Switch>
                <Route
            key={1}
            exact={true}
            path={`/search`}
            render={(props) => <Search {...props} />}
          />
          
                </Switch>
                
                <Switch>
                <Route
            key={1}
            exact={true}
            path={`/exploreproduct`}
            render={(props) => <ExploreProduct {...props} />}
          />
          
                </Switch>
            </Router>
            
        </div>
    )
}

export default index;
