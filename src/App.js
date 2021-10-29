import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AboutUs from "./pages/home/aboutUs/AboutUs";
import Home from "./pages/home/home/Home";
import Login from "./pages/Login/Login/Login";

import Notfound from "./pages/NotFound/Notfound";
import Footer from "./pages/shared/Footer/Footer";
import Header from "./pages/shared/Header/Header";
import Services from "./pages/home/Services/Services";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>

          <Route exact path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
