import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "../views/Home";
import Layout from "../components/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route path="" element={<HomeView />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<div>404</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
