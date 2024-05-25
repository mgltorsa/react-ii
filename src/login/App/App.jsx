import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "../views/Home";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import store from "../store";
import LoginView from "../views/Login";

const appOptions = [
  {
    title: "Home",
    to: "",
  },
  {
    title: "Login",
    to: "login",
  },
];
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Layout options={appOptions} />}>
              <Route path="" element={<HomeView />} />
              <Route path="login" element={<LoginView />} />
              <Route path="*" element={<div>404</div>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
