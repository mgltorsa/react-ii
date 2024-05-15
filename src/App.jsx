import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginView from "./views/Login";
import UserContextProvider from "./contexts/UserContext";
import HomeView from "./views/Home";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
  return (
    <>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Layout />}>
              <Route path="" element={<HomeView />} />
              <Route
                path="login"
                element={
                  <PublicRoute>
                    <LoginView />
                  </PublicRoute>
                }
              />
              <Route
                path="perfil"
                element={
                  <ProtectedRoute>
                    <div>Perfil</div>
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </>
  );
}

export default App;
