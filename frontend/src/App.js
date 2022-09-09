import "./App.css";

import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import Layout from "./components//Layout/Layout";
import { createTheme, ThemeProvider } from "@mui/material";
import FavoritesPage from "./pages/FavoritesPage";
import MyToursPage from "./pages/MyToursPage";
import MessagesPage from "./pages/MessagesPage";
import ProfilePage from "./pages/ProfilePage";

const theme = createTheme({
  typography: {
    fontFamily: ["Rubik"],
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/favoriti" element={<FavoritesPage />} />
          <Route path="/mojeture" element={<MyToursPage />} />
          <Route path="/poruke" element={<MessagesPage />} />
          <Route path="/profil" element={<ProfilePage />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
