import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetail from "../view/ProductDetails";
import AddToCart from "../view/AddToCart";
import Profile from "../view/Profile";
import Login from "../view/Login";
import Register from "../view/Register";

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
          <Route
            key={1}
            exact={true}
            path={`/profile`}
            render={(props) => <Profile {...props} />}
          />
          <Route
            key={1}
            exact={true}
            path={`/login`}
            render={(props) => <Login {...props} />}
          />
          <Route
            key={1}
            exact={true}
            path={`/register`}
            render={(props) => <Register {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default index;
