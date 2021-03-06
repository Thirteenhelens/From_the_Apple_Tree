import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import UserPage from "../UserPage/UserPage";
import LoginPage from "../LoginPage/LoginPage";
import AboutPage from "../AboutPage/AboutPage";
import AdminPage from "../AdminPage/AdminPage";
import LandingPage from "../LandingPage/LandingPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import AdminEditProduct from "../AdminEditProduct/AdminEditProduct";
import ChooseProductPage from "../ChooseProductPage/ChooseProductPage";
import CompareProductsPage from "../CompareProductsPage/CompareProductsPage";
import AdminAddProductPage from "../AdminAddProductPage/AdminAddProductPage";

function App() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
    dispatch({ type: "GET_PRODUCTS" });
    dispatch({ type: "GET_FAVORITES" });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <Route exact path="/login">
            {user.id ? (
              // If the user is already logged in,
              // redirect to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the login page
              <LoginPage />
            )}
          </Route>

          <Route exact path="/registration">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the registration page
              <RegisterPage />
            )}
          </Route>

          <Route exact path="/home">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the Landing page
              <LandingPage />
            )}
          </Route>

          <ProtectedRoute exact path="/compare">
            <CompareProductsPage />
          </ProtectedRoute>

          <ProtectedRoute exact path="/addProduct">
            <AdminAddProductPage />
          </ProtectedRoute>

          <ProtectedRoute exact path="/editProduct">
            <AdminEditProduct />
          </ProtectedRoute>

          <ProtectedRoute exact path="/choose">
            <ChooseProductPage />
          </ProtectedRoute>

          <ProtectedRoute exact path="/admin">
            {/* If the user has high enough clearance, they are brought to the admin page. 
            Otherwise, user is brought to the home page */}
            {user.clearance_level > 1 ? <AdminPage /> : <UserPage />}
          </ProtectedRoute>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
