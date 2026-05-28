import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import AuthLayout from "../Layouts/AuthLayout";
import PrivateRoutes from "./PrivateRoutes";
import AdminRoutes from "./AdminRoutes";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Store from "../Pages/Store";
import Game from "../Pages/Game";
import Cart from "../Pages/Cart";
import Favorites from "../Pages/Favorites";
import Profile from "../Pages/Profile";
import Admin from "../Pages/Admin";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        <Route
          path="/store"
          element={
            <MainLayout>
              <Store />
            </MainLayout>
          }
        />

        <Route
          path="/game/:id"
          element={
            <MainLayout>
              <Game />
            </MainLayout>
          }
        />

        <Route
          path="/login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />

        <Route
          path="/register"
          element={
            <AuthLayout>
              <Register />
            </AuthLayout>
          }
        />

        <Route
          path="/cart"
          element={
            <PrivateRoutes>
              <MainLayout>
                <Cart />
              </MainLayout>
            </PrivateRoutes>
          }
        />

        <Route
          path="/favorites"
          element={
            <PrivateRoutes>
              <MainLayout>
                <Favorites />
              </MainLayout>
            </PrivateRoutes>
          }
        />

        <Route
          path="/profile"
          element={
            <PrivateRoutes>
              <MainLayout>
                <Profile />
              </MainLayout>
            </PrivateRoutes>
          }
        />

        <Route
          path="/admin"
          element={
            <AdminRoutes>
              <MainLayout>
                <Admin />
              </MainLayout>
            </AdminRoutes>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}