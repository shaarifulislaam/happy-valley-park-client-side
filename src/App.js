import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AboutUs from "./pages/home/aboutUs/AboutUs";
import Home from "./pages/home/home/Home";
import Login from "./pages/Login/Login/Login";
import Notfound from "./pages/NotFound/Notfound";
import Footer from "./pages/shared/Footer/Footer";
import Header from "./pages/shared/Header/Header";
import Services from "./pages/home/Services/Services";
import AuthProvider from "./context/AuthProvider";
import AddService from "./pages/AddService/AddService";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";
import ManageBooking from "./pages/ManageBooking/ManageBooking";
import MyBooking from "./pages/MyBooking/MyBooking";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
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
            <Route exact path="/serviceDetails/:bookingId">
              <ServiceDetails></ServiceDetails>
            </Route>
            <Route exact path="/addService">
              <AddService></AddService>
            </Route>
            <Route exact path="/myBooking">
              <MyBooking></MyBooking>
            </Route>
            <Route exact path="/manageBooking">
              <ManageBooking></ManageBooking>
            </Route>
            <Route exact path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
