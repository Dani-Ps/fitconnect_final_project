import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthProvider.js';
import { ThemeProvider } from './contexts/ThemeProvider.js';
import { ScreenProvider } from './contexts/ScreenProvider.js';
import { ModalProvider } from './contexts/ModalProvider.js';

import ProtectedRoute from './service/ProtectedRouterService.js';

import HomePage from './pages/home/homePage';
import DashboardPage from './pages/admin/dashboardPage.jsx';
import UserTable from './components/common/table/userTable.jsx';
import AuthPage from './pages/auth/authPage.jsx';
import UsersPage from './pages/admin/userPage.jsx';
import ActivitiesPage from './pages/admin/activitiesPage.jsx';
import PruebasPage from './pages/pruebasPage.jsx';
import ProfilePage from './pages/profile/profilePage.jsx';
import "@fontsource/roboto";
import './app.scss'

function App() {
  document.title = 'FitConnet';
  const isAuht = window.sessionStorage.getItem("isAuht");
  const userRole = window.sessionStorage.getItem("Role");
  const isAdmin = () => {
    if (userRole && userRole === ('ROLE_ADMIN')) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <Router>
      <Routes>
        {/* unauthorized route */}
        {!isAuht && (
          <>
            <Route path="/login" element={<AuthPage />} />
            <Route path="/register" element={<AuthPage />} />
            <Route path="/" element={<Navigate to="/login" />} />
          </>
        )}
        {/* ProtectedRoutes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/login" element={<Navigate to="/" />} />
          <Route path="/register" element={<Navigate to="/" />} />
          {isAdmin() ? (
            <>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={< DashboardPage />} />
              <Route path="/manager/users" element={< UsersPage />} />
              <Route path="/manager/activities" element={< ActivitiesPage />} />
              <Route path="/manager/notifications" element={< UserTable />} />
              <Route path="/userDetails/:userName" element={<UserTable />} />
              <Route path="/admin/:userName" element={<UserTable />} />



            </>
          ) : (
            <>
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<Navigate to="/" />} />
              <Route path="/:userName" element={<ProfilePage />} />
            </>
          )}
        </Route>
        <Route path="/pruebas" element={<PruebasPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

const DefaultExport = () => (
  <AuthProvider>
    <ThemeProvider>
      <ScreenProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </ScreenProvider>
    </ThemeProvider>
  </AuthProvider>
);

export default DefaultExport;