import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./LoginPage";
import Header from "./Header";
import EditReadingsPage from "./EditingReadingsPage";
import AdminPage from "./AdminPage";
import EditingDevicePage from "./EditingDevicePage";
import EditingUserPage from "./EditingUserPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/manage_users" element={<EditingUserPage />} />
          {/* <LoginPage /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
