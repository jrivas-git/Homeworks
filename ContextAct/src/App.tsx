import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import PrivateRoute from "./Routes/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/page1"
          element={
            <PrivateRoute>
              <Page1 />
            </PrivateRoute>
          }
        />

        <Route
          path="/page2"
          element={
            <PrivateRoute>
              <Page2 />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

