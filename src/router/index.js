import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetail from "../view/ProductDetails";
import AddToCart from "../view/AddToCart";
import Profile from "../view/Profile";
import Login from "../view/Login";
import Register from "../view/Register";
import ExploreProduct from "../view/ExploreProduct";
import Home from "../view/Home";
import Search from "../view/Search";
import ModalFilter from "../components/modal/ModalFilter";

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
          <Route
            key={1}
            exact={true}
            path={`/explore`}
            render={(props) => <ExploreProduct {...props} />}
          />
          <Route
            key={1}
            exact={true}
            path={`/`}
            render={(props) => <Home {...props} />}
          />
          <Route
            key={1}
            exact={true}
            path={`/search`}
            render={(props) => <Search {...props} />}
          />
          <Route
            key={1}
            exact={true}
            path={`/test`}
            render={(props) => <ModalFilter {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default index;
