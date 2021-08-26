import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetail from "../view/ProductDetails";
import AddToCart from "../view/AddToCart"

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
          <Route
            key={1}
            exact={true}
            path={`/add-to-cart`}
            render={(props) => <AddToCart {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default index;
