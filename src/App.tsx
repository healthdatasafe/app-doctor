import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./i18n";

import { Dashboard } from "./pages/Dashboard";
import { Layout } from "./components/layout/Layout";
import { ProtectedRoute } from "./auth/ProtectedRoute";
import { Login } from "./auth/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            <Navigate to="/dashboard" replace />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
