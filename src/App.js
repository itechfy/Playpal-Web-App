import { Route, Routes } from "react-router-dom";
import { useContext, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import "./assets/css/soft-ui-dashboard.css?v=1.0.6";
import "./assets/css/soft-ui-dashboard.min.css";

import "./assets/js/core/bootstrap.min.js";
import "./assets/js/core/popper.min.js";
import "./assets/js/plugins/perfect-scrollbar.min.js";
import "./assets/js/plugins/smooth-scrollbar.min.js";
import "./assets/js/soft-ui-dashboard.min.js?v=1.0.6";
import Navbar from "./components/Navigation/navbar.component";
import GroundsRequests from "./routes/Grounds-Requests/groundsRequest.component";
import LoginPage from "./routes/Login/login.component";
import { UserContext } from "./context/user.context";
import { GroundProvider } from "./context/grounds.context";

function App() {
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    document.body.classList.add("g-sidenav-show", "bg-gray-100");
  }, []);

  return (
    <Routes>
      <Route path="" element={<Navbar />}>
        {
          /*Add routes here that are available after authentication*/
          currentUser ? (
            <>
              <Route index element={<p>Dashboard</p>} />
              <Route path="/coaches" element={<p>Coaches</p>} />
              <Route
                path="/requests"
                element={
                  <GroundProvider>
                    <GroundsRequests />
                  </GroundProvider>
                }
              />
            </>
          ) : (
            <Route index element={<LoginPage />} />
          )
        }
      </Route>
    </Routes>
  );
}

export default App;
