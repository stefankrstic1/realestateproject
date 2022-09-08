import "./App.css";

import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/favoriti" />
        <Route path="/mojeture" />
        <Route path="/poruke" />
        <Route path="/profil" />
      </Routes>
    </Layout>
  );
}

export default App;
