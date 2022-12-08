import './App.css';
import HomePage from "./home";
import DetailsPage from "./details";
import LoginPage from "./login";
import OtherProfilePage from "./profile/otherProfile";
import SearchPage from "./search";
import PersonalProfilePage from "./profile/personalProfile";
import ProtectedRoute from "./util-components/protectedRoute";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import NavBar from "./util-components/navBar";
import {Provider} from "react-redux";
import { configureStore }
    from '@reduxjs/toolkit';
import userReducer from "./reducers/userReducer";
const store = configureStore({ reducer: { users: userReducer } });

function App() {
  return (
      <BrowserRouter>
          <Provider store={store}>
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
                             element={
                                 <ProtectedRoute>
                                     <PersonalProfilePage/>
                                 </ProtectedRoute>
                             }/>
                      <Route path="/search"
                             element={<SearchPage/>}/>
                      <Route path="/details/:did"
                             element={<DetailsPage/>}/>
                  </Routes>
              </div>
          </Provider>
      </BrowserRouter>
  );
}

export default App;
