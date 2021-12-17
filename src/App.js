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



function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <MenuBar></MenuBar>
          <Switch>
            <Route path='/home' Component={Home}>
              <Home></Home>
            </Route>

            <Route exact path='/' Component={Home}>
              <Home></Home>
            </Route>

            <Route path='/doctors' Component={Doctors}>
              <Doctors></Doctors>
            </Route>

            <Route path='/contacts' Component={Contacts}>
              <Contacts></Contacts>
            </Route>

            <Route path='/signin' Component={SignIn}>
              <SignIn></SignIn>
            </Route>

            <Route path='/signup' Component={SignUp}>
              <SignUp></SignUp>
            </Route>

            <Route path='/servicedetails/:userId'>
              <ServiceDetails></ServiceDetails>
            </Route>

            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
