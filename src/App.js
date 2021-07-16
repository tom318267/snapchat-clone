import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Preview from "./components/Preview/Preview";
import WebcamCapture from "./components/WebcamCapture/WebcamCapture";
import Chats from "./components/Chats/Chats";
import ChatView from "./components/ChatView/ChatView";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/appSlice";
import Login from "./components/Login/Login";
import { auth } from "./firebase";

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            username: authUser.displayName,
            profilePic: authUser.photoURL,
            id: authUser.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <img
              className="app-logo"
              src="https://lakeridgenewsonline.com/wp-content/uploads/2020/04/snapchat.jpg"
              alt=""
            />
            <div className="app-body">
              <div className="app-bodyBackground">
                <Switch>
                  <Route path="/chats/view">
                    <ChatView />
                  </Route>
                  <Route path="/chats">
                    <Chats />
                  </Route>
                  <Route path="/preview">
                    <Preview />
                  </Route>
                  <Route exact path="/">
                    <WebcamCapture />
                  </Route>
                </Switch>
              </div>
            </div>
          </>
        )}
      </Router>
    </div>
  );
};

export default App;
