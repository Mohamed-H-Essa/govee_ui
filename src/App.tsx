import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./LoginPage";
import Header from "./Header";
import EditReadingsPage from "./EditingReadingsPage";
import AdminPage from "./AdminPage";
import EditingDevicePage from "./EditingDevicePage";
import EditingUserPage from "./EditingUserPage";
import MainPage from "./Main";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/manage_users" element={<EditingUserPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
