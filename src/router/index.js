import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetail from "../view/ProductDetails"


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
            </Router>
            
        </div>
    )
}

export default index
