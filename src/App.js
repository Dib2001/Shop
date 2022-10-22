import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Forget from "./pages/Forget";
import Main from "./components/Home/Main";


function App() {
  return (
    <>
      {/* <Router>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            exact
            path='/forgetPassword'
            element={
              <>
                <Forget />
              </>
            }
          />
          <Route
            exact
            path='/register'
            element={
              <>
                <Register />
              </>
            }
          />
        </Routes>
      </Router> */}
      <Main/>
    </>
  );
}

export default App;
