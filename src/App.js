import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import MenuBar from './Components/MenuBar/MenuBar';
import Doctors from './Components/Doctors/Doctors';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contacts from './Components/Contacts/Contacts';
import NotFound from './Components/NotFound/NotFound';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import AuthProvider from './Context/AuthProvider';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Services from './Components/Services/Services';
import ComingSoon from './Components/ComingSoon/ComingSoon';
import DetailsDoctor from './Components/Doctor/DetailsDoctor/DetailsDoctor';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <MenuBar></MenuBar>
          <Switch>
            <Route path='/home'>
              <Home></Home>
            </Route>

            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path='/doctors'>
              <Doctors></Doctors>
            </Route>

            <Route path='/contacts'>
              <Contacts></Contacts>
            </Route>

            <Route path='/signin'>
              <SignIn></SignIn>
            </Route>

            <Route path='/signup'>
              <SignUp></SignUp>
            </Route>

            <PrivateRoute path='/services'>
              <Services></Services>
            </PrivateRoute>

            <PrivateRoute path='/servicedetails/:userId'>
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>

            <Route path='/comingsoon'>
              <ComingSoon></ComingSoon>
            </Route>

            <PrivateRoute path='/detailsdoctor/:id'>
              <DetailsDoctor></DetailsDoctor>
            </PrivateRoute>

            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
