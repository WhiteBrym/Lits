import React from "react";
import Home from "./Components/Home/Home";
import Game from "./Components/Game/Game";
import GameContent from "./Components/Game/GameContent";
// import LogIn from "./Components/LogIn/LogIn";
import Esports from "./Components/Esports/Esports";
import EsportsContent from "./Components/Esports/EsportsContent";
import TexhnologyContent from "./Components/Technology/TechnologyContent";
import Technology from "./Components/Technology/Technology";
import AuthButton from "./Auth/AuthButton";
import PrivateRoute from "./Auth/PrivateRoute";
import LoginPage from "./Auth/LogIn";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="bodyContent">
          <Router>
            <nav>
              <span>
                <Link to="/">
                  <button>Home</button>
                </Link>
              </span>

              <span>
                <Link to="/Games">
                  <button>Games</button>
                </Link>
              </span>

              <span>
                <Link to="/Esports">
                  <button>ESport</button>
                </Link>
              </span>

              <span>
                <Link to="/Technology">
                  <button>Technology</button>
                </Link>
              </span>

              <span>
                <button>
                  <AuthButton />
                </button>
              </span>
            </nav>

            <Switch>
              <PrivateRoute exact path="/Games">
                <Game />
              </PrivateRoute>

              <PrivateRoute exact path="/Games/:game">
                <GameContent />
              </PrivateRoute>

              <PrivateRoute exact path="/Esports">
                <Esports />
              </PrivateRoute>

              <PrivateRoute exact path="/Esports/:esport">
                <EsportsContent />
              </PrivateRoute>

              <PrivateRoute exact path="/Technology">
                <Technology />
              </PrivateRoute>

              <PrivateRoute exact path="/Technology/:technology">
                <TexhnologyContent />
              </PrivateRoute>

              <Route path="/login">
                <LoginPage />
              </Route>

              <PrivateRoute path="/">
                <Home />
              </PrivateRoute>
            </Switch>
          </Router>
        </div>
        <div>
          <footer>
            <div>
              <h5>Lobach Yurii</h5>
            </div>
            <div className="footerIcon">
              <a href="https://www.facebook.com">
                {" "}
                <i className="fa fa-facebook-f"></i>{" "}
              </a>
              <a href="https://www.instagram.com">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="https://telegram.org/">
                <i className="fa fa-telegram" aria-hidden="true"></i>
              </a>
              <a href="https://github.com/">
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
              <a href="https://www.youtube.com/">
                <i className="fa fa-youtube" aria-hidden="true"></i>
              </a>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
export default App;
