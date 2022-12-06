import './App.css';
import HomePage from "./home";
import DetailsPage from "./details";
import LoginPage from "./login";
import OtherProfilePage from "./profile/otherProfile";
import SearchPage from "./search";
import PersonalProfilePage from "./profile/personalProfile";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import NavBar from "./util-components/navBar";

function App() {
  return (
      <BrowserRouter>
          <NavBar/>
          <div className="container">
              <Routes>
                  <Route path="/*"
                         index
                         element={<HomePage/>}/>
                  <Route path="/login"
                         element={<LoginPage/>}/>
                  <Route path="/profile/:uid"
                         element={<OtherProfilePage/>}/>
                  <Route path="/profile"
                         element={<PersonalProfilePage/>}/>
                  <Route path="/search"
                         element={<SearchPage/>}/>
                  <Route path="/details/:did"
                         element={<DetailsPage/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
